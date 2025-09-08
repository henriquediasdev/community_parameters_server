import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProfileFilamentInput {
  @Field()
  plateType: string;

  @Field(() => Int)
  bedTemperature: number;
  
  @Field(() => Int)
  nozzleTemperature: number;
  
  @Field(() => Int)
  maxVolumetricSpeed: number;
}
