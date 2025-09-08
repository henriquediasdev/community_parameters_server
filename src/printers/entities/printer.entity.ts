import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Printer as PrinterPrisma } from '@prisma/client';

@ObjectType()
export class Printer implements PrinterPrisma {
  @Field(() => ID)
  id: string;

  @Field()
  type: string

  @Field()
  brand: string

  @Field()
  model: string

  @Field()
  picture: string

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
