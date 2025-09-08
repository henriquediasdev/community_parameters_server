import { Module } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { PrintersResolver } from './printers.resolver';

@Module({
  providers: [PrintersResolver, PrintersService],
})
export class PrintersModule {}
