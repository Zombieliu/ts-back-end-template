import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_claim_bounty_content', controller.get_claim_bounty_content.bind(controller));