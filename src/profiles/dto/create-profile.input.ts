import { InputType, Field } from '@nestjs/graphql';
import { CreateProfileFilamentInput } from './create-profile-filament.input';
import { CreateProfileResinInput } from './create-profile-resin.input';

@InputType()
export class CreateProfileInput {
  @Field()
  printerId: string;

  @Field()
  consumableId: string;

  @Field(() => CreateProfileFilamentInput, { nullable: true })
  profileFilament?: CreateProfileFilamentInput;

  @Field(() => CreateProfileResinInput, { nullable: true })
  profileResin?: CreateProfileResinInput;
}
