import { Module } from '@nestjs/common';
import { SystemController } from './features/system/system.controller';
import {ConfigModule} from "@nestjs/config";
import {PrismaService} from "./prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [SystemController],
  providers: [
    PrismaService
  ],
})
export class AppModule {}
