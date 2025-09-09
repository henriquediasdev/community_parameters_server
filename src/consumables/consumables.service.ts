import { Injectable } from '@nestjs/common';
import { CreateConsumableInput } from './dto/create-consumable.input';
import { UpdateConsumableInput } from './dto/update-consumable.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConsumablesService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: CreateConsumableInput) {
    console.log({data});
    const consumable = await this.prismaService.consumable.create({ data })
    return consumable;
  }

  async findAll() {
    const consumables = this.prismaService.consumable.findMany({})
    return consumables;
  }

  async findOne(id: string) {
    const consumable = this.prismaService.consumable.findUnique({ where: { id } })
    return consumable;
  }

  async update(id: string, data: UpdateConsumableInput) {
    const consumable = this.prismaService.consumable.update({ where: { id }, data })
    return consumable;
  }

  async remove(id: string) {
    const consumable = this.prismaService.consumable.delete({ where: { id } })
    return consumable;
  }
}
