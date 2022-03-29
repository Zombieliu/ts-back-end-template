import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Inputvalue } from '../../../entity/inputvalue';


export class HomeController {
  async get_facucet_user(ctx: Context): Promise<void> {


    const inputValue = ctx.query.inputValue;
    const connection = await createConnection();
    const result = await connection
      .getRepository(Inputvalue)
      .createQueryBuilder('inputvalue')
      .where('inputvalue.inputValue = :inputValue' ,{ inputValue })
      .getOne();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
