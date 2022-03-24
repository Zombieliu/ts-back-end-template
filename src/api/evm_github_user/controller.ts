import { Context } from 'koa';
import { ResponseBody } from '../util';
import { Bind_github_user } from '../../entity/evm_github_user';
import { createConnection } from 'typeorm';

export class HomeController {
  async evm_github_user(ctx: Context): Promise<void> {
    const evm_address = ctx.request.body.evm_address;
    const github_user_name = ctx.request.body.github_user_name;


    const connection = await createConnection();

    await connection.createQueryBuilder()
      .insert()
      .into(Bind_github_user)
      .values({ evm_address,github_user_name })
      .execute();

    await connection.close();

    // createConnection()
    //   .then(connection => {
    //     const evm_github_user = new Evm_github_user();
    //     evm_github_user.evm_address ='0x000';
    //     evm_github_user.github_user_name = 'zombieliu';
    //     return connection.manager.save(evm_github_user).then(evm_github_user => {
    //       console.log('Photo has been saved. Photo id is',evm_github_user.id);
    //     });
    //   })
    //   .catch(error => console.log(error));


      

    ctx.body = ResponseBody.success(
      'insert success',
    );
  }
}
