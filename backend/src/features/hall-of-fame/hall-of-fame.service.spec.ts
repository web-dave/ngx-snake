import { Test, TestingModule } from '@nestjs/testing';
import { HallOfFameService } from './hall-of-fame.service';
import { TestDbService } from '../../../test/utils/test.db.service';
import { PrismaService } from '../../prisma.service';

const testDbService = new TestDbService();

describe('HallOfFameService', () => {
  let service: HallOfFameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallOfFameService, PrismaService],
    }).compile();

    service = module.get<HallOfFameService>(HallOfFameService);

    testDbService.cleanAndRebuildDb();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can get hall of fame for one level...', async () => {
    const result = await service.getList(1);
    expect(result.length).toEqual(1);
  });
});
