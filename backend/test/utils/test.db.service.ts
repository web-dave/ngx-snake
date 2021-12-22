import { exec } from 'child_process';
import { ScoreEntryMdf } from '../mdf/score.entry.mdf';
import { PrismaService } from '../../src/prisma.service';

export class TestDbService {
  private prismaService: PrismaService;

  constructor() {
    this.prismaService = new PrismaService();
  }

  public async cleanAndRebuildDb(): Promise<void> {
    await this.clearSchema();
    await this.createShema();
    await this.createData();
  }

  public async clearSchema(): Promise<void> {
    await this.prismaService
      .$executeRaw`DROP TABLE IF EXISTS _prisma_migrations`;
    await this.prismaService.$executeRaw`DROP TABLE IF EXISTS ScoreEntry`;
    await this.prismaService.$executeRaw`DROP TABLE IF EXISTS User`;
  }

  public async createShema(): Promise<void> {
    // await exec('npm run test:create:db');
    await this.execPromise('npm run test:create:db');
  }

  public async createData(): Promise<void> {
    await new ScoreEntryMdf(this.prismaService).create();
  }

  private execPromise(command) {
    return new Promise(function (resolve, reject) {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(stdout.trim());
      });
    });
  }
}
