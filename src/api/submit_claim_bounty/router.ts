import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/submit_claim_bounty', controller.submit_claim_bounty.bind(controller));
