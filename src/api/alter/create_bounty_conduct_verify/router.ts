import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/create_bounty_conduct_verify', controller.create_bounty_conduct_verify.bind(controller));
