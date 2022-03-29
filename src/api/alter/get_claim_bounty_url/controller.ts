import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Submit_claim_bounty } from '../../../entity/submit_claim_bounty';


export class HomeController {
  async get_claim_bounty_content(ctx: Context): Promise<void> {
    const bounty_url = ctx.query.bounty_url;
    const connection = await createConnection();
    const result = await connection
       .getRepository(Submit_claim_bounty)
      .createQueryBuilder('bounty')
      .where('bounty.bounty_url = :bounty_url' ,{ bounty_url })
      .getOne();
    await connection.close();
    ctx.body = ResponseBody.success(
      result,
    );
  }
}
