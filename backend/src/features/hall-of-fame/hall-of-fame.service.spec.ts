import { Test, TestingModule } from '@nestjs/testing';
import { HallOfFameService } from './hall-of-fame.service';
import { TestDbService } from '../../../test/utils/test.db.service';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryLevel } from '@prisma/client';

const testDbService = new TestDbService();

describe('HallOfFameService', () => {
  let service: HallOfFameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallOfFameService, PrismaService],
    }).compile();

    service = module.get<HallOfFameService>(HallOfFameService);

    await testDbService.cleanAndRebuildDb();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can get hall of fame for one level...', async () => {
    const result = await service.getList(ScoreEntryLevel.BEGINNER);
    expect(result.length).toEqual(3);
  });
});
