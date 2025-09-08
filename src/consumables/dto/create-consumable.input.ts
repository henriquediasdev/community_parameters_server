import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Consumable } from '../entities/consumable.entity';

@InputType()
export class CreateConsumableInput extends OmitType(Consumable, ["id", "createdAt", "updatedAt"], InputType) {
  @Field()
  type: 'string';
}
