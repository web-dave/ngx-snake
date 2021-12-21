import { Test, TestingModule } from '@nestjs/testing';
import { HallOfFameService } from './hall-of-fame.service';

describe('HallOfFameService', () => {
  let service: HallOfFameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallOfFameService],
    }).compile();

    service = module.get<HallOfFameService>(HallOfFameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
