import { Body, Controller, Get, Put, Req } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HallOfFameService } from './hall-of-fame.service';
import { ScoreEntryDto } from './model/score.entry.dto';

@Controller('api/v1/hall-of-fame')
@ApiTags('hall-of-fame')
export class HallOfFameController {
  constructor(private service: HallOfFameService) {}

  @Get()
  @ApiOkResponse({
    type: ScoreEntryDto,
    description: 'Get all Hall-Of-Fame Entry',
    isArray: true,
  })
  async getList(): Promise<ScoreEntryDto[]> {
    return await this.service.getList();
  }

  @Put()
  @ApiCreatedResponse({
    type: ScoreEntryDto,
    description: 'Add a new Hall-Of-Fame Entry',
  })
  async addScoreEntry(@Body() scoreEntry: ScoreEntryDto, @Req() req): Promise<ScoreEntryDto> {
    return await this.service.add(scoreEntry, req?.user?.sub);
  }
}
