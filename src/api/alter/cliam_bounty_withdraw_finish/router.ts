import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/cliam_bounty_withdraw_finish', controller.cliam_bounty_withdraw_finish.bind(controller));
