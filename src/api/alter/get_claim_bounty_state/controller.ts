import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Claim_bounty } from '../../../entity/claim_bounty';


export class HomeController {
  async get_claim_bounty_state(ctx: Context): Promise<void> {
    const claim_bounty_url = ctx.query.claim_bounty_url;
    const connection = await createConnection();
    const result = await connection
       .getRepository(Claim_bounty)
      .createQueryBuilder('bounty')
      .where('bounty.claim_bounty_url = :claim_bounty_url' ,{ claim_bounty_url })
      .getOne();
    await connection.close();
    ctx.body = ResponseBody.success(
      result,
    );
  }
}
