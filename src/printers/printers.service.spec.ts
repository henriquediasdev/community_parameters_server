import { Test, TestingModule } from '@nestjs/testing';
import { PrintersService } from './printers.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrinters = [{
  "brand": "elegoo",
  "model": "saturn 3 ultra",
  "id": "84645637-eac1-42ba-a3c0-f9b170e56f1d",
  "picture": "https://chatgpt.com/c/68b76e36-6ce4-8323-8804-9073815f120e",
  "createdAt": "2025-09-08T20:03:35.514Z",
  "updatedAt": "2025-09-08T20:03:35.514Z",
},
{
  "brand": "elegoo",
  "model": "saturn 4 ultra",
  "id": "44645637-eac1-42ba-a3c0-f9b170e56f75",
  "picture": "https://chatgpt.com/c/68b76e36-6ce4-8323-8804-9073815f120e",
  "createdAt": "2025-09-08T20:03:35.514Z",
  "updatedAt": "2025-09-08T20:03:35.514Z"
}];

describe('PrintersService', () => {
  let service: PrintersService;
  let prisma: PrismaService;

  const prismaMock = {
    printer: {
      findMany: jest.fn().mockResolvedValue(mockPrinters),
      findUnique: jest.fn().mockResolvedValue(mockPrinters[1]),
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrintersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<PrintersService>(PrintersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should return printers', async () => {
    const results = await service.findAll();
    expect(results).toEqual(expect.arrayContaining([expect.objectContaining({ brand: "elegoo", "model": "saturn 3 ultra" })]));
    expect(prisma.printer.findMany).toHaveBeenCalled();
  });

  it('should return unique printer', async () => {
    const result = await service.findOne("84645637-eac1-42ba-a3c0-f9b170e56f1d");
    expect(result).toEqual(expect.objectContaining({ brand: "elegoo", "model": "saturn 4 ultra" }));
    expect(prisma.printer.findUnique).toHaveBeenCalled();
  });
});
