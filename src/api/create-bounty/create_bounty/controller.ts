import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Bounty } from '../../../entity/bounty';
import { createConnection } from 'typeorm';

export class HomeController {
  async create_bounty(ctx: Context): Promise<void> {

    const github_user_name = ctx.request.body.github_user_name;
    const bounty_url = ctx.request.body.bounty_url;
    const bounty_state = ctx.request.body.bounty_state;
    const participants_number = ctx.request.body.participants_number;
    const submissions_number = ctx.request.body.submissions_number;
    const insert_time = ctx.request.body.insert_time;
    const update_time = ctx.request.body.update_time;
    const bounty_level = ctx.request.body.bounty_level;
    const bounty_name = ctx.request.body.bounty_name;
    const bounty_finish_nft_image = ctx.request.body.bounty_finish_nft_image;
    const bounty_content = ctx.request.body.bounty_content;

    const connection = await createConnection();
    const result = await connection
      .createQueryBuilder()
      .insert()
      .into(Bounty)
      .values([{ github_user_name,bounty_url,bounty_state,participants_number,submissions_number,insert_time,update_time,
        bounty_level,bounty_name,bounty_finish_nft_image,bounty_content }])
      .execute();
    await connection.close();
    ctx.body = ResponseBody.success(
      result,
    );
  }
}
