import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AnyObj } from 'src/types';

@ObjectType()
export class Configmap {
  @Field(() => ID, { description: 'name' })
  name: string;

  /** data */
  data: AnyObj;
}
