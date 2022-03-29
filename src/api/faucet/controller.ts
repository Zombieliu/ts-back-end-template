import { Context } from 'koa';
import { ResponseBody } from '../util';
import { createConnection } from 'typeorm';
import { Inputvalue } from '../../entity/inputvalue';

export class HomeController {

  async faucet(ctx: Context): Promise<void> {

    const inputValue = ctx.request.body.inputValue;
    const token = ctx.request.body.token;
    

    const connection = await createConnection();
    const result = await connection
        .createQueryBuilder()
        .insert()
        .into(Inputvalue)
        .values({
          inputValue,
          token  })
        .execute();

    await connection.close();
    ctx.body = ResponseBody.success(
        result,
    );

  }
}
