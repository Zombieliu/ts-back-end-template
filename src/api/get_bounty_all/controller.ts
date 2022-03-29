import { Context } from 'koa';
import { ResponseBody } from '../util';
import { createConnection } from 'typeorm';
import { Bounty } from '../../entity/bounty';


export class HomeController {
  async get_bounty_all(ctx: Context): Promise<void> {

      
    const connection = await createConnection();
    const result = await connection.getRepository(Bounty)
      .createQueryBuilder('bounty')
      .getMany();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
