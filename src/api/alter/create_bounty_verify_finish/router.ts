import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/create_bounty_verify_finish', controller.create_bounty_verify_finish.bind(controller));
