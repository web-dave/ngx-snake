import { ApiProperty } from '@nestjs/swagger';

export class PingResponse {
  @ApiProperty()
  pong: number;
}
