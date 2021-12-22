import { ScoreEntryLevel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ScoreEntryDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  level: ScoreEntryLevel;
  @ApiProperty()
  score: number;
  @ApiProperty()
  username: string;
}
