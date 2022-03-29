import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Claim_bounty } from '../../../entity/claim_bounty';
import { createConnection } from 'typeorm';

export class HomeController {
  async claim_bounty_submissions(ctx: Context): Promise<void> {

    const claim_bounty_url = ctx.request.body.claim_bounty_url;
    const submissions_number = ctx.request.body.submissions_number;
    const connection = await createConnection();
    const result = await connection
        .createQueryBuilder()
        .update(Claim_bounty)
        .set({submissions_number: Number(submissions_number) + 1 })
        .where('bounty_url = :bounty_url', {claim_bounty_url})
        .execute();
    await connection.close();


    ctx.body = ResponseBody.success(
      result,
    );
  }
}
