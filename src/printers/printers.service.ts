import { Injectable } from '@nestjs/common';
import { CreatePrinterInput } from './dto/create-printer.input';
import { UpdatePrinterInput } from './dto/update-printer.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrintersService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: CreatePrinterInput) {
    const printer = await this.prismaService.printer.create({ data })
    return printer;
  }

  async findAll() {
    const printers = await this.prismaService.printer.findMany({});
    return printers;
  }

  async findOne(id: string) {
    const printer = await this.prismaService.printer.findUnique({ where: { id } });
    return printer;
  }

  async update(id: string, updatePrinterInput: UpdatePrinterInput) {
    const printer = await this.prismaService.printer.update({ where: { id }, data: { ...updatePrinterInput } });
    return printer;
  }

  async remove(id: string) {
    const printer = await this.prismaService.printer.delete({ where: { id } })
    return printer;
  }
}
