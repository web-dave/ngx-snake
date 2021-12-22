import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryDto } from './model/score.entry.dto';
import { ScoreEntryLevel } from '@prisma/client';

@Injectable()
export class HallOfFameService {
  constructor(private prisma: PrismaService) {}

  async getList(level: ScoreEntryLevel): Promise<ScoreEntryDto[]> {
    const qr = await this.prisma.scoreEntry.findMany({
      where: {
        level: level,
      },
    });
    return qr.map((scoreEntry) => {
      return {
        id: scoreEntry.id,
        level: scoreEntry.level,
        score: scoreEntry.score,
        date: scoreEntry.date,
        username: scoreEntry.username,
      };
    });
  }
}
