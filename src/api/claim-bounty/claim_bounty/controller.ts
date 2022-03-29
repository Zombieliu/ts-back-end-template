import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Claim_bounty } from '../../../entity/claim_bounty';

export class HomeController {
  async claim_bounty(ctx: Context): Promise<void> {

    const claim_github_user_name = ctx.request.body.claim_github_user_name;
    const github_user_name = ctx.request.body.github_user_name;
    const claim_bounty_url = ctx.request.body.claim_bounty_url ;
    const claim_bounty_state = ctx.request.body.claim_bounty_state;
    const participants_number = ctx.request.body.participants_number;
    const submissions_number = ctx.request.body.submissions_number;
    const insert_time = ctx.request.body.insert_time;
    const update_time = ctx.request.body.update_time;
    const bounty_level = ctx.request.body.bounty_level;
    const bounty_name = ctx.request.body.bounty_name;
    const bounty_finish_nft_image = ctx.request.body.bounty_finish_nft_image;
    const bounty_content = ctx.request.body.bounty_content;
    const connection = await createConnection();
    await connection.createQueryBuilder()
      .insert()
      .into(Claim_bounty)
      .values({
        claim_github_user_name,
        github_user_name,
        claim_bounty_url,
        claim_bounty_state,
        participants_number,
        submissions_number,
        insert_time,
        update_time,
        bounty_level,
        bounty_name,
        bounty_finish_nft_image,
        bounty_content })
      .execute();
    await connection.close();

    ctx.body = ResponseBody.success(
      'insert success',
    );
  }
  // const claim_github_user_name = ctx.request.body.claim_github_user_name;
  // const github_user_name = ctx.request.body.github_user_name;
  // const claim_bounty_url = ctx.request.body.claim_bounty_url ;
  // const claim_bounty_state = ctx.request.body.claim_bounty_state;
  // const participants_number = ctx.request.body.participants_number;
  // const submissions_number = ctx.request.body.submissions_number;
  // const insert_time = ctx.request.body.insert_time;
  // const update_time = ctx.request.body.update_time;
  // const bounty_level = ctx.request.body.bounty_level;
  // const bounty_name = ctx.request.body.bounty_name;
  // const bounty_finish_nft_image = ctx.request.body.bounty_finish_nft_image;
  // const bounty_content = ctx.request.body.bounty_content;
  // const result = await connection
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Claim_bounty)
  //   .values([{
  //     claim_github_user_name,
  // github_user_name,
  // claim_bounty_url,
  // claim_bounty_state,
  // participants_number,
  // submissions_number,
  // insert_time,
  // update_time,
  // bounty_level,
  // bounty_name,
  // bounty_finish_nft_image,
  // bounty_content,
  // }])
  // .execute();

}
