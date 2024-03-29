import { BaseContext } from 'koa';
import { ResponseBody } from '../util';


export class HomeController {
  async getHello(ctx: BaseContext): Promise<void> {

    console.log(ctx.headers);

    ctx.body = ResponseBody.success(
      'hello world',
    );
  }
}
