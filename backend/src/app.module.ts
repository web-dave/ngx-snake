import { Module } from '@nestjs/common';
import { SystemController } from './features/system/system.controller';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [SystemController],
  providers: [],
})
export class AppModule {}
