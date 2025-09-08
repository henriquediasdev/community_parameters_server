import { Test, TestingModule } from '@nestjs/testing';
import { ConsumablesResolver } from './consumables.resolver';
import { ConsumablesService } from './consumables.service';

describe('ConsumablesResolver', () => {
  let resolver: ConsumablesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumablesResolver, ConsumablesService],
    }).compile();

    resolver = module.get<ConsumablesResolver>(ConsumablesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
