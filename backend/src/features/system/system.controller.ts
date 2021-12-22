import { Controller, Get } from '@nestjs/common';
import { PingResponse } from './model/ping.response';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/api/v1')
export class SystemController {
  @Get('/ping')
  @ApiResponse({
    status: 200,
    type: null,
    description: 'check endpoint for be if running',
  })
  async ping(): Promise<PingResponse> {
    return Promise.resolve({ pong: Date.now() });
  }
}
