import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Claim_bounty } from '../../../entity/claim_bounty';


export class HomeController {
  async get_claim_bounty_withdraw(ctx: Context): Promise<void> {
    const claim_github_user_name = ctx.query.claim_github_user_name;
    const connection = await createConnection();
    const result = await connection.getRepository(Claim_bounty)
      .createQueryBuilder('bounty').limit(6)
      .where('bounty.claim_github_user_name = :claim_github_user_name' ,{ claim_github_user_name })
      .andWhere('bounty.claim_bounty_state = :claim_bounty_state', { claim_bounty_state: 'Withdraw' })

      .getMany();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
