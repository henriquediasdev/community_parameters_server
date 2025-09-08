import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { PrintersModule } from './printers/printers.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConsumablesModule } from './consumables/consumables.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [GraphqlModule, PrintersModule, PrismaModule, ConsumablesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
