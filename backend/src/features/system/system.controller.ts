import {Controller, Get} from "@nestjs/common";
import {PingResponse} from "./model/ping.response";

@Controller("")
export class SystemController {

  @Get()
  async ping(): Promise<PingResponse> {
    return Promise.resolve({timestamp: Date.now()});
  }
}
