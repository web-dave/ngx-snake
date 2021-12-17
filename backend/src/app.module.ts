import {Module} from '@nestjs/common';
import {SystemController} from "./features/system/system.controller";

@Module({
  imports: [],
  controllers: [SystemController],
  providers: [],
})
export class AppModule {}
