import { Context } from 'koa';
import { ResponseBody } from '../util';
import { createConnection } from 'typeorm';
import { Submit_claim_bounty } from '../../entity/submit_claim_bounty';

export class HomeController {
  async submit_claim_bounty(ctx: Context): Promise<void> {

    const bounty_url = ctx.request.body.bounty_url;
    const submit_bounty_url = ctx.request.body.submit_bounty_url;
    const claim_github_user_name = ctx.request.body.claim_github_user_name;
    const github_user_name = ctx.request.body.github_user_name;
    console.log(bounty_url)
    const connection = await createConnection();
    await connection.createQueryBuilder()
        .insert()
        .into(Submit_claim_bounty)
        .values({ bounty_url,submit_bounty_url,claim_github_user_name,github_user_name })
        .execute();

    await connection.close();


    ctx.body = ResponseBody.success(
        'insert success',
    );
  }
}
