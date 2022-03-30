import { Test, TestingModule } from '@nestjs/testing';
import { ScoreEntryLevel } from '@prisma/client';
import { TestDataUtil } from '../../../test/utils/test.data.util';
import { TestDbService } from '../../../test/utils/test.db.service';
import { PrismaService } from '../../prisma.service';
import { HallOfFameService } from './hall-of-fame.service';
import { ScoreEntryDto } from './model/score.entry.dto';

const testDbService = new TestDbService();

describe('HallOfFameService', () => {
  let service: HallOfFameService;
  let prismaService: PrismaService;
  let scoreEntry: ScoreEntryDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallOfFameService, PrismaService],
    }).compile();

    service = module.get<HallOfFameService>(HallOfFameService);
    prismaService = module.get<PrismaService>(PrismaService);

    await testDbService.cleanAndRebuildDb();

    scoreEntry = {
      id: 'c752a511-4adb-4acb-9321-fae716cd8fc1',
      score: 80,
      date: TestDataUtil.getDate(),
      level: ScoreEntryLevel.BEGINNER,
      username: 'tscarrisbrick1',
      userSub: 'tscarrisbrick1',
    };
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
    const result = await service.add(scoreEntry, 'tscarrisbrick1');
    expect(result.id).toEqual(scoreEntry.id);
    const newCount = await prismaService.scoreEntry.count();
    expect(actualCount).toBeLessThan(newCount);
  });

  it('not add new score entry other entry exist with same username and level and smaller score...', async () => {
    const actualCount = await prismaService.scoreEntry.count();
    scoreEntry.score = 20;
    const result = await service.add(scoreEntry, 'tscarrisbrick1');
    expect(result).toBeNull();
    const newCount = await prismaService.scoreEntry.count();
    expect(actualCount).toEqual(newCount);
  });

  it('add entry - other entry exist same username - other level...', async () => {
    const actualCount = await prismaService.scoreEntry.count();
    scoreEntry.level = ScoreEntryLevel.ADVAMCED;
    const result = await service.add(scoreEntry, 'tscarrisbrick1');
    expect(result).not.toBeNull();
    const newCount = await prismaService.scoreEntry.count();
    expect(actualCount).toBeLessThan(newCount);
  });
});
