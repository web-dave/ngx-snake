import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { HallOfFameController } from './features/hall-of-fame/hall-of-fame.controller';
import { HallOfFameService } from './features/hall-of-fame/hall-of-fame.service';
import { SystemController } from './features/system/system.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SystemController, HallOfFameController],
  providers: [PrismaService, HallOfFameService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude({ path: 'api/v1/hall-of-fame', method: RequestMethod.GET } as RouteInfo)
      .forRoutes(HallOfFameController);
  }
}
