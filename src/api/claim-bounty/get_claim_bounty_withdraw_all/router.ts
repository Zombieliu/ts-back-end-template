import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_claim_bounty_withdraw_all', controller.get_claim_bounty_withdraw_all.bind(controller));
