import { Context } from 'koa';
import { ResponseBody } from '../../util';
import { Bind_medal } from "../../../entity/bind_medal"
import { createConnection } from "typeorm";
export class HomeController {
    async upgrade_medal(ctx: Context): Promise<void> {

        const github_user_name = ctx.request.body.github_user_name;
        const current_experience = ctx.request.body.current_experience;
        const medal_level = ctx.request.body.medal_level;
        

        const connection = await createConnection();
        await connection
            .createQueryBuilder()
            .update(Bind_medal)
            .set({ current_experience: current_experience,medal_level:medal_level})
            .where('github_user_name = :github_user_name', { github_user_name})
            .execute();

        await connection.close();
        ctx.body = ResponseBody.success(
            'insert success',
        );
    }
}


