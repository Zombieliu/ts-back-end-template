import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/cliam_bounty_review_withdraw', controller.cliam_bounty_review_withdraw.bind(controller));
