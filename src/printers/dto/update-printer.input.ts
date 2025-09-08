import { CreatePrinterInput } from './create-printer.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePrinterInput extends PartialType(CreatePrinterInput) {
  @Field(() => ID)
  id: string;
}
