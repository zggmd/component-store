/**
 * 由 src/kubernetes/gen/index.ts 自动生成
 * !!! 请不要修改 !!!
 */
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Subscription is the Schema for the subscriptions API
 */
export interface Subscription {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  metadata?: {
    [k: string]: any;
  };
  /**
   * SubscriptionSpec defines the desired state of Subscription
   */
  spec?: {
    /**
     * Atomic is pass to helm install/upgrade --atomic if set, the installation process deletes the installation on failure. The --wait flag will be set automatically if --atomic is used
     */
    atomic?: boolean;
    /**
     * CleanupOnFail is pass to helm upgrade --cleanup-on-fail allow deletion of new resources created in this upgrade when upgrade fails
     */
    cleanupOnFail?: boolean;
    /**
     * ComponentRef is a reference to the Component
     */
    component: {
      /**
       * API version of the referent.
       */
      apiVersion?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      fieldPath?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      name?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      namespace?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      resourceVersion?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      uid?: string;
      [k: string]: any;
    };
    /**
     * ComponentPlanInstallMethod is the method used to install the component
     */
    componentPlanInstallMethod?: string;
    /**
     * creator is the name of crd creator, filled by webhook
     */
    creator?: string;
    /**
     * DependencyUpdate is pass to helm install/upgrade --dependency-update update dependencies if they are missing before installing the chart
     */
    dependencyUpdate?: boolean;
    /**
     * Description is pass to helm install/upgrade --description add a custom description
     */
    description?: string;
    /**
     * DisableHooks is pass to helm install/upgrade --no-hooks if set, prevent hooks from running during install and disable pre/post upgrade hooks
     */
    disableHooks?: boolean;
    /**
     * DisableOpenAPIValidation is pass to helm install/upgrade --disable-openapi-validation if set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
     */
    disableOpenAPIValidation?: boolean;
    /**
     * EnableDNS is pass to helm install/upgrade --enable-dns enable DNS lookups when rendering templates
     */
    enableDNS?: boolean;
    /**
     * Force is passed to helm upgrade --force force resource updates through a replacement strategy
     */
    force?: boolean;
    /**
     * MaxHistory is pass to helm upgrade --history-max limit the maximum number of revisions saved per release. Use 0 for no limit
     */
    historyMax?: number;
    /**
     * KeepHistory is paas to helm uninstall --keep-history remove all associated resources and mark the release as deleted, but retain the release history.
     */
    keepHistory?: boolean;
    /**
     * MaxRetry
     */
    maxRetry?: number;
    /**
     * Name is pass to helm install <chart> <name>, name arg
     */
    name: string;
    /**
     * Override defines the override settings for the component
     */
    override?: {
      /**
       * Images for replace old image see https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/images
       */
      images?: {
        /**
         * Digest is the value used to replace the original image tag. If digest is present NewTag value is ignored.
         */
        digest?: string;
        /**
         * Name is a tag-less image name.
         */
        name?: string;
        /**
         * NewName is the value used to replace the original name.
         */
        newName?: string;
        /**
         * NewTag is the value used to replace the original tag.
         */
        newTag?: string;
        [k: string]: any;
      }[];
      /**
       * Set is passed to helm install --set can specify multiple or separate values with commas: key1=val1,key2=val2 Helm also provides other set options, such as --set-json or --set-literal, which can be replaced by values or valuesFrom fields.
       */
      set?: string[];
      /**
       * SetString is passed to helm install --set-string set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2) https://github.com/helm/helm/pull/3599 Helm also provides other set options, such as --set-json or --set-literal, which can be replaced by values or valuesFrom fields.
       */
      'set-string'?: string[];
      /**
       * Values holds the values for this Helm release.
       */
      values?: {
        [k: string]: any;
      };
      /**
       * Values is passed to helm install --values or -f specify values in a YAML file or a URL (can specify multiple) ValuesFrom holds references to resources containing Helm values for this HelmRelease, and information about how they should be merged.
       */
      valuesFrom?: {
        /**
         * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
         */
        kind: 'Secret' | 'ConfigMap';
        /**
         * Name of the values' referent. Should reside in the same namespace as the referring resource.
         */
        name: string;
        /**
         * TargetPath is the YAML dot notation path the value should be merged at. When set, the ValuesKey is expected to be a single flat value. Defaults to 'None', which results in the values getting merged at the root.
         */
        targetPath?: string;
        /**
         * ValuesKey is the data key where the values.yaml or a specific value can be found at. Defaults to 'values.yaml'. When set, must be a valid Data Key, consisting of alphanumeric characters, '-', '_' or '.'.
         */
        valuesKey?: string;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    /**
     * RepositoryRef is a reference to the Repository
     */
    repository?: {
      /**
       * API version of the referent.
       */
      apiVersion?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      fieldPath?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      name?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      namespace?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      resourceVersion?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      uid?: string;
      [k: string]: any;
    };
    /**
     * SkipCRDs is pass to helm install/upgrade --skip-crds if set, no CRDs will be installed. By default, CRDs are installed if not already present
     */
    skipCRDs?: boolean;
    /**
     * TimeoutSeconds is pass to helm install/upgrade --timeout, default is 300s time to wait for any individual Kubernetes operation (like Jobs for hooks)
     */
    timeoutSeconds?: number;
    /**
     * Wait is pass to helm install/upgrade --wait if set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout
     */
    wait?: boolean;
    /**
     * WaitForJobs is pass to helm install/upgrade --wait-for-jobs if set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout
     */
    waitForJobs?: boolean;
    [k: string]: any;
  };
  /**
   * SubscriptionStatus defines the state of Subscription
   */
  status?: {
    /**
     * Conditions of the resource.
     */
    conditions?: {
      /**
       * LastSuccessfulTime is repository Last Successful Update Time
       */
      lastSuccessfulTime?: string;
      /**
       * LastTransitionTime is the last time this condition transitioned from one status to another.
       */
      lastTransitionTime: string;
      /**
       * A Message containing details about this condition's last transition from one status to another, if any.
       */
      message?: string;
      /**
       * A Reason for this condition's last transition from one status to another.
       */
      reason: string;
      /**
       * Status of this condition; is it currently True, False, or Unknown
       */
      status: string;
      /**
       * Type of this condition. At most one of each condition type may apply to a resource at any point in time.
       */
      type: string;
      [k: string]: any;
    }[];
    /**
     * Installed records all componentplans installed, ordered by installation time.
     */
    installed?: {
      /**
       * ComponentPlanRef is a reference to the latest ComponentPlan
       */
      componentPlan?: {
        /**
         * API version of the referent.
         */
        apiVersion?: string;
        /**
         * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
         */
        fieldPath?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        namespace?: string;
        /**
         * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         */
        resourceVersion?: string;
        /**
         * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
         */
        uid?: string;
        [k: string]: any;
      };
      /**
       * InstalledTime is the time that the version was installed in cluster
       */
      installedTime?: string;
      /**
       * InstalledVersion is the version currently installed in cluster
       */
      installedVersion?: {
        appVersion: string;
        createdAt: string;
        deprecated: boolean;
        digest: string;
        updatedAt: string;
        version: string;
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    /**
     * RepositoryHealth contains the Subscription's view of its relevant Repository' status. It is used to determine SubscriptionStatusConditions related to Repository
     */
    repositoryHealth?: {
      /**
       * Healthy is true if the Repository is healthy; false otherwise.
       */
      healthy: boolean;
      /**
       * LastUpdated represents the last time that the RepositoryHealth changed
       */
      lastUpdated: string;
      /**
       * RepositoryRef is a reference to a Repository.
       */
      repository: {
        /**
         * API version of the referent.
         */
        apiVersion?: string;
        /**
         * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
         */
        fieldPath?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        namespace?: string;
        /**
         * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         */
        resourceVersion?: string;
        /**
         * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
         */
        uid?: string;
        [k: string]: any;
      };
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
