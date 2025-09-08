import { Field, ID, OmitType, InputType, Int } from '@nestjs/graphql';
import { ProfileResin } from '../entities/profile-resin.entity';

@InputType()
export class CreateProfileResinInput {
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
}
