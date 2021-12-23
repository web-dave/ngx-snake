import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryDto } from './model/score.entry.dto';

@Injectable()
export class HallOfFameService {
  constructor(private prisma: PrismaService) {}

  async getList(): Promise<ScoreEntryDto[]> {
    const qr = await this.prisma.scoreEntry.findMany({});
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

  async add(scoreEntry: ScoreEntryDto): Promise<ScoreEntryDto | null> {
    const scoreListUserLevel = await this.prisma.scoreEntry.findMany({
      where: { username: scoreEntry.username, score: { gt: scoreEntry.score } },
    });
    if (scoreListUserLevel.length > 0) return Promise.resolve(null);

    return await this.prisma.scoreEntry.create({ data: scoreEntry });
  }
}
