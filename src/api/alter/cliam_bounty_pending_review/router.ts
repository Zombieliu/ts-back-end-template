import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/cliam_bounty_pending_review', controller.cliam_bounty_pending_review.bind(controller));
