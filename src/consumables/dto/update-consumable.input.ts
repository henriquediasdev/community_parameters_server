import { CreateConsumableInput } from './create-consumable.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsumableInput extends PartialType(CreateConsumableInput) {
  @Field()
  id: string;
}
