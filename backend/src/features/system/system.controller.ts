import { Controller, Get } from '@nestjs/common';
import { PingResponse } from './model/ping.response';

@Controller('/api/v1')
export class SystemController {

  @Get('/ping')
  async ping(): Promise<PingResponse> {
    return Promise.resolve({ timestamp: Date.now() });
  }
}
