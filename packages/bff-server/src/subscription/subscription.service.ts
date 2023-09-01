import { SortDirection } from '@/common/models/sort-direction.enum';
import { ComponentsService } from '@/components/components.service';
import { Component } from '@/components/models/component.model';
import { Injectable } from '@nestjs/common';
import { KubernetesService } from 'src/kubernetes/kubernetes.service';
import { CRD, JwtAuth } from 'src/types';
import { CreateSubscriptionInput } from './dto/create-subscription.input';
import { SubscriptionArgs } from './dto/subscription.args';
import { PaginatedSubscription, Subscription } from './models/subscription.model';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly k8sService: KubernetesService,
    private readonly componentsService: ComponentsService
  ) {}

  format(sub: CRD.Subscription, components: Component[]): Subscription {
    const specComponent = sub.spec?.component;
    const component = components?.find(c => c.name === specComponent?.name);
    return {
      name: sub.metadata?.name,
      namespace: sub.metadata?.namespace,
      creationTimestamp: new Date(sub.metadata?.creationTimestamp).toISOString(),
      chartName: component?.chartName,
      version: component?.latestVersion,
      updatedAt: component?.updatedAt,
      repository: sub.spec?.repository?.name,
    };
  }

  async getSubscriptions(
    auth: JwtAuth,
    namespace: string,
    cluster?: string
  ): Promise<Subscription[]> {
    const k8s = await this.k8sService.getClient(auth, { cluster });
    const { body } = await k8s.subscription.list(namespace);
    const components = await this.componentsService.listComponents(auth, cluster);
    return body.items
      ?.map(item => this.format(item, components))
      ?.sort(
        (a, b) => new Date(b.creationTimestamp).valueOf() - new Date(a.creationTimestamp).valueOf()
      );
  }

  async getSubscriptionsPaged(
    auth: JwtAuth,
    args: SubscriptionArgs
  ): Promise<PaginatedSubscription> {
    const {
      page = 1,
      pageSize = 20,
      cluster,
      sortDirection,
      sortField,
      namespace,
      chartName,
      repository,
    } = args;
    const res = await this.getSubscriptions(auth, namespace, cluster);
    const filteredRes = res?.filter(
      t =>
        (!chartName || t.chartName?.includes(chartName)) &&
        (!repository || t.repository?.includes(repository))
    );
    if (sortField && sortDirection) {
      filteredRes?.sort((a, b) => {
        if (sortField === 'creationTimestamp') {
          const [aT, bT] = [
            new Date(a.creationTimestamp).valueOf(),
            new Date(b.creationTimestamp).valueOf(),
          ];
          return sortDirection === SortDirection.ascend ? aT - bT : bT - aT;
        }
      });
    }
    const totalCount = filteredRes.length;
    return {
      totalCount,
      hasNextPage: page * pageSize < totalCount,
      nodes: filteredRes.slice((page - 1) * pageSize, page * pageSize),
    };
  }

  async removeSubscription(
    auth: JwtAuth,
    name: string,
    namespace: string,
    cluster?: string
  ): Promise<boolean> {
    const k8s = await this.k8sService.getClient(auth, { cluster });
    await k8s.subscription.delete(name, namespace);
    return true;
  }

  async createSubscription(
    auth: JwtAuth,
    subscription: CreateSubscriptionInput,
    cluster?: string
  ): Promise<boolean> {
    const { namespace } = subscription;
    const k8s = await this.k8sService.getClient(auth, { cluster });
    await k8s.subscription.create(namespace, {
      metadata: {
        name: '',
        namespace,
      },
    });
    return true;
  }
}