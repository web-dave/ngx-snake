import { Test, TestingModule } from '@nestjs/testing';
import { HallOfFameController } from './hall-of-fame.controller';

describe('HallOfFameController', () => {
  let controller: HallOfFameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HallOfFameController],
    }).compile();

    controller = module.get<HallOfFameController>(HallOfFameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
