import { Context } from 'koa';
import { ResponseBody } from '../util';
import { createConnection } from 'typeorm';
import { Bind_medal } from "../../entity/bind_medal"

export class HomeController {
    async bind_medal(ctx: Context): Promise<void> {

        const github_user_name = ctx.request.body.github_user_name;
        const address = ctx.request.body.address;
        const medal_level = ctx.request.body.medal_level ;
        const current_experience = ctx.request.body.current_experience;

        const connection = await createConnection();
        await connection.createQueryBuilder()
            .insert()
            .into(Bind_medal)
            .values({github_user_name,address,medal_level,current_experience})
            .execute();
        await connection.close();
        ctx.body = ResponseBody.success(
            'insert success',
        );
    }
}


