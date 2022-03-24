import { Context } from 'koa';
import { ResponseBody } from '../util';
import { Bind_github_user } from '../../entity/evm_github_user';
import { createConnection } from 'typeorm';

export class HomeController {
  async get_evm_github_user(ctx: Context): Promise<void> {

    const evm_address = ctx.query.evm_address;
    const connection = await createConnection();
    const result = await connection.getRepository(Bind_github_user)
      .createQueryBuilder('evm_github_user')
      .where('evm_github_user.evm_address = :evm_address', { evm_address })
      .getOne();
    await connection.close();
    // await connection.createQueryBuilder()
    //   .insert()
    //   .into(Evm_github_user)
    //   .values({ evm_address,github_user_name })
    //   .execute();

    // createConnection()
    //   .then(connection => {
    //     const evm_github_user = new Evm_github_user();
    //     evm_github_user.evm_address ='0x000';
    //     evm_github_user.github_user_name = 'zombieliu';
    //     return connection.manager.save(evm_github_user).then(evm_github_user => {
    //       console.log('Photo has been saved. Photo id is',evm_github_user.evm_address);
    //     });
    //   })
    //   .catch(error => console.log(error));


      

    ctx.body = ResponseBody.success(
      result,
    );
  }
}
