import { Context } from 'koa';
import { ResponseBody } from '../util';
import { createConnection } from 'typeorm';
import { Bind_medal } from '../../entity/bind_medal';


export class HomeController {
  async get_medal(ctx: Context): Promise<void> {

    const github_user_name = ctx.query.github_user_name;
    console.log(github_user_name)
    const connection = await createConnection();
    const result = await connection.getRepository(Bind_medal)
      .createQueryBuilder('bind_medal')
      .where('bind_medal.github_user_name = :github_user_name' ,{ github_user_name })
      .getOne();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
