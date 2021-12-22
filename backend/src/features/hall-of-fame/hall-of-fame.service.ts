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

  async add(scoreEntry: ScoreEntryDto) {
    return await this.prisma.scoreEntry.create({ data: scoreEntry });
  }
}
