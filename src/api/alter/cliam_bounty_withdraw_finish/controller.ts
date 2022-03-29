import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Claim_bounty } from '../../../entity/claim_bounty';
import { createConnection } from 'typeorm';

export class HomeController {
  async cliam_bounty_withdraw_finish(ctx: Context): Promise<void> {

    const claim_bounty_url = ctx.request.body.claim_bounty_url;
    const claim_github_user_name = ctx.request.body.claim_github_user_name;
    const connection = await createConnection();
    const result = await connection
        .createQueryBuilder()
        .update(Claim_bounty)
        .set({claim_bounty_state: 'Finish' })
        .where('claim_bounty_url = :claim_bounty_url', {claim_bounty_url})
        .execute();
    await connection.close();

    ctx.body = ResponseBody.success(
        result,
    );
  }
}

