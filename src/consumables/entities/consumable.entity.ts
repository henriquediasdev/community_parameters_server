import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Consumable as ConsumablePrisma } from '@prisma/client';

@ObjectType()
export class Consumable implements ConsumablePrisma {
  @Field(() => ID)
  id: string;

  @Field()
  type: string

  @Field()
  material: string

  @Field()
  brand: string

  @Field()
  model: string

  @Field()
  color: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}
