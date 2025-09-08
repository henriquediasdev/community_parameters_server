import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateProfileResinInput } from "./create-profile-resin.input";

@InputType()
export class UpdateProfileResinInput extends PartialType(CreateProfileResinInput) {
  @Field()
  id: string;
}
