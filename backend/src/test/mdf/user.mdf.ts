import { PrismaClient } from '@prisma/client';

export class UserMdf {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create() {
    for (let i = 0; i < 10; i++) {
      await this.prisma.user.create({
        data: {
          id: `8e2ddb93-78a4-43c9-b10f-a40225a2a91${i}`,
          username: `username-${i}`,
          email: `user-${i}@test.com`,
          name: `user-${i}`,
        },
      });
    }
  }
}
