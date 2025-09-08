import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Profile as ProfilePrisma } from '@prisma/client';
import { ProfileFilament } from './profile-filament.entity';
import { ProfileResin } from './profile-resin.entity';

@ObjectType()
export class Profile implements ProfilePrisma {
  @Field(() => ID)
  id: string;

  @Field()
  printerId: string;

  @Field()
  consumableId: string;

  @Field(() => ProfileFilament, { nullable: true })
  profileFilament?: ProfileFilament;

  @Field(() => ProfileResin, { nullable: true })
  profileResin?: ProfileResin;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
