import { Test, TestingModule } from '@nestjs/testing';
import { PrintersResolver } from './printers.resolver';
import { PrintersService } from './printers.service';

describe('PrintersResolver', () => {
  let resolver: PrintersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintersResolver, PrintersService],
    }).compile();

    resolver = module.get<PrintersResolver>(PrintersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
