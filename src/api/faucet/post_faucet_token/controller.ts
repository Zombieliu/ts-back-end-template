import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Inputvalue } from '../../../entity/inputvalue';

export class HomeController {

  async post_faucet_token(ctx: Context): Promise<void> {

    const inputValue = ctx.request.body.inputValue;
    const token = ctx.request.body.token;

    const connection = await createConnection();
    const result = await connection
        .createQueryBuilder()
        .update(Inputvalue)
        .set({token: Number(token) + 20 })
        .where("inputValue = :inputValue", { inputValue })
        .execute();

    await connection.close();
    ctx.body = ResponseBody.success(
        result,
    );

  }
}
