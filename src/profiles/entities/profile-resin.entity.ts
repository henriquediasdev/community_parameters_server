import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ProfileResin as ProfileResinPrisma } from '@prisma/client';
import { Profile } from './profile.entity';

@ObjectType()
export class ProfileResin implements ProfileResinPrisma {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  layerHeight: number;

  @Field(() => Int)
  bottomLayerCount: number;
  
  @Field(() => Int)
  bottomExposureTime: number;
  
  @Field(() => Int)
  exposureTime: number;
  
  @Field(() => Int)
  transitionLayerCount: number;
  
  @Field(() => Int)
  restTimeAfterRetract: number;

  @Field(() => Profile)
  profile: Profile;

  @Field(() => ID)
  profileId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
