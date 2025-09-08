import { CreateProfileFilamentInput } from "./create-profile-filament.input";
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileFilamentInput extends PartialType(CreateProfileFilamentInput) {
  @Field()
  id: string;
}
