import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ConsumablesService } from './consumables.service';
import { Consumable } from './entities/consumable.entity';
import { CreateConsumableInput } from './dto/create-consumable.input';
import { UpdateConsumableInput } from './dto/update-consumable.input';

@Resolver(() => Consumable)
export class ConsumablesResolver {
  constructor(private readonly consumablesService: ConsumablesService) {}

  @Mutation(() => Consumable)
  async createConsumable(@Args('data') data: CreateConsumableInput) {
    return this.consumablesService.create(data);
  }

  @Query(() => [Consumable], { name: 'consumables' })
  async findAll() {
    return this.consumablesService.findAll();
  }

  @Query(() => Consumable, { name: 'consumable', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.consumablesService.findOne(id);
  }

  @Mutation(() => Consumable, { nullable: true})
  async updateConsumable(@Args('data') data: UpdateConsumableInput) {
    return this.consumablesService.update(data.id, data);
  }

  @Mutation(() => Consumable, { nullable: true})
  async removeConsumable(@Args('id', { type: () => ID }) id: string) {
    return this.consumablesService.remove(id);
  }
}
