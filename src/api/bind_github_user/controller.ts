import { Context } from 'koa';
import { ResponseBody } from '../util';
import { Bind_github_user  } from '../../entity/evm_github_user';
import { createConnection } from 'typeorm';

export class HomeController {
  async bind_github_user(ctx: Context): Promise<void> {

    const evm_address = ctx.request.body.address;
    const github_user_name = ctx.request.body.github_user_name;
    const connection = await createConnection();
    await connection.createQueryBuilder()
      .insert()
      .into(Bind_github_user)
      .values({ github_user_name,evm_address })
      .execute();

    await connection.close();

    // createConnection()
    //   .then(connection => {·
    //     const bind_github_user = new Bind_github_user();
    //     bind_github_user.evm_address ='0x000';
    //     bind_github_user.github_user_name = 'zombieliu';
    //     return connection.manager.save(bind_github_user).then(evm_address => {
    //       console.log('Photo has been saved. Photo id is',evm_address);
    //     });
    //   })
    //   .catch(error => console.log(error));

    ctx.body = ResponseBody.success(
      'insert success',
    );
  }
}
