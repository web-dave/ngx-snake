import {PrismaClient} from "@prisma/client";

export class TestUtils {

  static clearDb() {
    const prisma = new PrismaClient();
    prisma.$connect();

  }
}
