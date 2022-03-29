import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_submiturl_claim_bounty', controller.get_submiturl_claim_bounty.bind(controller));
