import {ScoreEntryLevel} from "@prisma/client";

export interface ScoreEntryDto {
  id: string;
  date: Date;
  level: ScoreEntryLevel;
  score: number;
  username: string;
}
