import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';
import { UserMdf } from '../mdf/user.mdf';

export class TestDbService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    console.log(process.env.DATABASE_URL);
  }

  public async cleanAndRebuildDb(): Promise<void> {
    await this.prisma.$connect();
    await this.clearSchema();
    await this.createShema();
    await this.createData();
    await this.prisma.$disconnect();
  }

  public async clearSchema(): Promise<void> {
    console.debug('Clear db schema for testing...');
    await this.prisma.$executeRaw`DROP TABLE IF EXISTS _prisma_migrations`;
    await this.prisma.$executeRaw`DROP TABLE IF EXISTS ScoreEntry`;
    await this.prisma.$executeRaw`DROP TABLE IF EXISTS User`;
    console.debug('Done');
  }

  public async createShema(): Promise<void> {
    console.debug('Create db schema for testing...');
    execSync('npm run test:create:db');
    console.debug('Done');
  }

  public async createData(): Promise<void> {
    console.debug('Fill db with data...');
    await new UserMdf(this.prisma).create();
    console.debug('Done');
  }
}
