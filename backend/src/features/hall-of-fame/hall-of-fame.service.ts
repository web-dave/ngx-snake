import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ScoreEntryDto } from './model/score.entry.dto';

@Injectable()
export class HallOfFameService {
  constructor(private prisma: PrismaService) {}

  async getList(level: number): Promise<ScoreEntryDto[]> {
    const qr = await this.prisma.scoreEntry.findMany({
      where: {
        level: level,
      },
      include: {
        user: true,
      },
    });
    return qr.map((scoreEntry) => {
      return {
        id: scoreEntry.id,
        score: scoreEntry.score,
        date: scoreEntry.date,
        username: scoreEntry.user.username,
      };
    });
  }
}
