import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Claim_bounty } from '../../../entity/claim_bounty';
import { createConnection } from 'typeorm';

export class HomeController {
  async cliam_bounty_pending_review(ctx: Context): Promise<void> {

    const claim_bounty_url = ctx.request.body.claim_bounty_url;
    const connection = await createConnection();
    const result = await connection
        .createQueryBuilder()
        .update(Claim_bounty)
        .set({claim_bounty_state: 'Review' })
        .where('claim_bounty_url = :claim_bounty_url', {claim_bounty_url})
        .execute();
    await connection.close();

    ctx.body = ResponseBody.success(
        result,
    );
  }
}

