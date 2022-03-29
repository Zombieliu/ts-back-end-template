import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Bounty } from '../../../entity/bounty';


export class HomeController {
  async get_submiturl_claim_bounty(ctx: Context): Promise<void> {
    const bounty_url = ctx.query.bounty_url;
    const connection = await createConnection();
    const result = await connection
        .getRepository(Bounty)
        .createQueryBuilder('bounty')
        .where('bounty.bounty_url = :bounty_url' ,{ bounty_url })
        .getOne();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
