import { Get, Route } from '@tsoa/runtime';

type PingResponse = {
  message: string;
};

@Route('/ping')
export default class PingController {
  @Get('/')
  public async getMessage(): Promise<PingResponse> {
    return {
      message: 'pong',
    };
  }
}
