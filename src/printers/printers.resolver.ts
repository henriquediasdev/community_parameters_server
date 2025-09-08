import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PrintersService } from './printers.service';
import { Printer } from './entities/printer.entity';
import { CreatePrinterInput } from './dto/create-printer.input';
import { UpdatePrinterInput } from './dto/update-printer.input';

@Resolver(() => Printer)
export class PrintersResolver {
  constructor(private readonly printersService: PrintersService) {}

  @Mutation(() => Printer)
  async createPrinter(@Args('data') data: CreatePrinterInput) {
    return this.printersService.create(data);
  }

  @Query(() => [Printer], { name: 'printers' })
  async findAll() {
    return this.printersService.findAll();
  }

  @Query(() => Printer, { name: 'printer', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.printersService.findOne(id);
  }

  @Mutation(() => Printer, { nullable: true})
  async updatePrinter(@Args('data') data: UpdatePrinterInput) {
    return this.printersService.update(data.id, data);
  }

  @Mutation(() => Printer, { nullable: true})
  async removePrinter(@Args('id', { type: () => ID }) id: string) {
    return this.printersService.remove(id);
  }
}
