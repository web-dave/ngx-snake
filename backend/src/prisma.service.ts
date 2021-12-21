import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  private prisma = new PrismaClient();
  private toExecuteSql: any[] = [];

  async  onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async add(toAdd) {
    this.toExecuteSql.push(toAdd);
  }

  async execute() {
    await this.prisma.$transaction(this.toExecuteSql);
    this.toExecuteSql = [];
  }
}
