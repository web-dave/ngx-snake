import { Module } from '@nestjs/common';
import { SystemController } from './features/system/system.controller';
import { ConfigModule } from '@nestjs/config';
import { HallOfFameService } from './features/hall-of-fame/hall-of-fame.service';
import { HallOfFameController } from './features/hall-of-fame/hall-of-fame.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SystemController, HallOfFameController],
  providers: [PrismaService, HallOfFameService],
})
export class AppModule {}
