import { Test, TestingModule } from '@nestjs/testing';
import { HallOfFameService } from './hall-of-fame.service';
import { TestDbService } from '../../../test/utils/test.db.service';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryLevel } from '@prisma/client';
import { ScoreEntryDto } from './model/score.entry.dto';
import { TestDataUtil } from '../../../test/utils/test.data.util';

const testDbService = new TestDbService();

describe('HallOfFameService', () => {
  let service: HallOfFameService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallOfFameService, PrismaService],
    }).compile();

    service = module.get<HallOfFameService>(HallOfFameService);
    prismaService = module.get<PrismaService>(PrismaService);

    await testDbService.cleanAndRebuildDb();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can get hall of fame for one level...', async () => {
    const result = await service.getList();
    expect(result.length).toEqual(9);
  });

  it('can add new ScoreEntry...', async () => {
    const actualCount = await prismaService.scoreEntry.count();
    const scoreEntry: ScoreEntryDto = {
      id: 'c752a511-4adb-4acb-9321-fae716cd8fc1',
      score: 500,
      date: TestDataUtil.getDate(),
      level: ScoreEntryLevel.BEGINNER,
      username: 'testuser',
    };
    const result = await service.add(scoreEntry);
    expect(result.id).toEqual(scoreEntry.id);

    const newCount = await prismaService.scoreEntry.count();
    expect(actualCount).toBeLessThan(newCount);
  });
});
