import {Test, TestingModule} from '@nestjs/testing';
import {SystemController} from "./system.controller";
import {PingResponse} from "./model/ping.response";

describe('SystemController', () => {
  let systemController: SystemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SystemController],
      providers: [],
    }).compile();

    systemController = app.get<SystemController>(SystemController);
  });

  describe('basic', () => {
    it('return a timestamp', async () => {
      const resp: PingResponse = await systemController.ping();
      expect(typeof resp.timestamp).toBe('number');
    });
  });
});
