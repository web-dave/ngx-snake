import { Body, Controller, Get, Put } from '@nestjs/common';
import { HallOfFameService } from './hall-of-fame.service';
import { ScoreEntryDto } from './model/score.entry.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/hall-of-fame')
@ApiTags('hall-of-fame')
export class HallOfFameController {
  constructor(private service: HallOfFameService) {}

  @Get()
  @ApiOkResponse({
    type: ScoreEntryDto,
    description: 'Get all Hall-Of-Fame Entry',
  })
  async getList(): Promise<ScoreEntryDto[]> {
    return await this.service.getList();
  }

  @Put()
  @ApiCreatedResponse({
    type: ScoreEntryDto,
    description: 'Add a new Hall-Of-Fame Entry',
  })
  async addScoreEntry(@Body() scoreEntry: ScoreEntryDto): Promise<ScoreEntryDto> {
    return await this.service.add(scoreEntry);
  }
}
