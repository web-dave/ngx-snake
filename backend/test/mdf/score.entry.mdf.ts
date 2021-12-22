import { PrismaClient } from '@prisma/client';
import { ScoreEntryData } from './score-entry-data';

export class ScoreEntryMdf {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create() {
    for (const item of ScoreEntryData) {
      await this.prisma.scoreEntry.create({
        data: item,
      });
    }
  }
}
