import { Module } from '@nestjs/common';
import { ConsumablesService } from './consumables.service';
import { ConsumablesResolver } from './consumables.resolver';

@Module({
  providers: [ConsumablesResolver, ConsumablesService],
})
export class ConsumablesModule {}
