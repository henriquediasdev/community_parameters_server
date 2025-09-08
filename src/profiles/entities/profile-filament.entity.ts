import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ProfileFilament as ProfileFilamentPrisma } from '@prisma/client';
import { Profile } from './profile.entity';

@ObjectType()
export class ProfileFilament implements ProfileFilamentPrisma {
  @Field(() => ID)
  id: string;

  @Field()
  plateType: string;

  @Field(() => Int)
  bedTemperature: number;
  
  @Field(() => Int)
  nozzleTemperature: number;
  
  @Field(() => Int)
  maxVolumetricSpeed: number;

  @Field(() => Profile)
  profile: Profile;

  @Field(() => ID)
  profileId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
