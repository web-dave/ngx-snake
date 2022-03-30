import { Injectable } from '@nestjs/common';
import { ScoreEntry } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryDto } from './model/score.entry.dto';

@Injectable()
export class HallOfFameService {
  constructor(private prisma: PrismaService) {}

  async getList(): Promise<ScoreEntryDto[]> {
    const qr = await this.prisma.scoreEntry.findMany({});
    return qr.map((scoreEntry: ScoreEntry) => {
      return {
        id: scoreEntry.id,
        level: scoreEntry.level,
        score: scoreEntry.score,
        date: scoreEntry.date,
        username: scoreEntry.username,
        userSub: scoreEntry.userSub,
      };
    });
  }

  async add(scoreEntry: ScoreEntryDto, userSub: string): Promise<ScoreEntryDto | null> {
    const scoreListUserLevel = await this.prisma.scoreEntry.findMany({
      where: { username: scoreEntry.username, score: { gt: scoreEntry.score } },
    });

    if (scoreListUserLevel.length > 0) {
      return Promise.resolve(null);
    }

    const data = { ...scoreEntry, userSub };
    return await this.prisma.scoreEntry.create({ data });
  }
}
