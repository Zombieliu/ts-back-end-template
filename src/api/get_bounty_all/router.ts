import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_bounty_all', controller.get_bounty_all.bind(controller));
