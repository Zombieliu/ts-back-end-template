import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Bounty } from '../../../entity/bounty';
import { createConnection } from 'typeorm';

export class HomeController {
  async create_bounty_verify_finish(ctx: Context): Promise<void> {

    const bounty_url = ctx.request.body.bounty_url;
    const connection = await createConnection();
    const result = await connection
      .createQueryBuilder()
      .update(Bounty)
      .set({bounty_state: 'Finish' })
      .where('bounty_url = :bounty_url', {bounty_url})
      .execute();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
