import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/claim_bounty', controller.claim_bounty.bind(controller));
