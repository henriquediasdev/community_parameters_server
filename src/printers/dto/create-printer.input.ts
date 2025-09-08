import { InputType, Field, OmitType } from '@nestjs/graphql';
import { Printer } from '../entities/printer.entity';
import { IsUrl } from 'class-validator';

@InputType()
export class CreatePrinterInput extends OmitType(Printer, ['id', 'createdAt', 'updatedAt'], InputType) {
  @Field()
  @IsUrl({}, { message: 'O campo imagem precisa conter uma URl válida' })
  picture: string
}
