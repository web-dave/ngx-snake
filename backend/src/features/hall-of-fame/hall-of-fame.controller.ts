import { Controller, Get, Param } from '@nestjs/common';
import { HallOfFameService } from './hall-of-fame.service';
import { ScoreEntryDto } from './model/score.entry.dto';

@Controller('api/v1/hall-of-fame')
export class HallOfFameController {

  constructor(private service: HallOfFameService) {
  }

  @Get('/:level')
  async getList(@Param('level') level: string): Promise<ScoreEntryDto[]> {
    return this.service.getList(+level);
  }
}
