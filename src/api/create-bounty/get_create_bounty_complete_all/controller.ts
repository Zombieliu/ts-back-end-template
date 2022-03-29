import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { createConnection } from 'typeorm';
import { Bounty } from '../../../entity/bounty';


export class HomeController {
  async get_create_bounty_complete_all(ctx: Context): Promise<void> {
    const github_user_name = ctx.query.github_user_name;
    const connection = await createConnection();
    const result = await connection.getRepository(Bounty)
      .createQueryBuilder('bounty')
      .where('bounty.github_user_name = :github_user_name' ,{ github_user_name })
      .andWhere('bounty.bounty_state = :bounty_state', { bounty_state: 'Finish' })

      .getMany();
    await connection.close();

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
