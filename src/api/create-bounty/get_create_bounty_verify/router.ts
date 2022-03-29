import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_create_bounty_verify', controller.get_create_bounty_verify.bind(controller));
