import { Controller, Get } from '@nestjs/common';
import { PingResponse } from './model/ping.response';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('/api/v1/system')
@ApiTags('system')
export class SystemController {
  @Get('/ping')
  @ApiOkResponse({
    type: PingResponse,
    description: 'check endpoint for be if running',
  })
  async ping(): Promise<PingResponse> {
    return Promise.resolve({ pong: Date.now() });
  }
}
