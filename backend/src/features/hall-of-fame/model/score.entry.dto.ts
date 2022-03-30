import { ApiProperty } from '@nestjs/swagger';
import { ScoreEntryLevel } from '@prisma/client';

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
  @ApiProperty()
  userSub: string;
}
