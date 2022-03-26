import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/create_bounty', controller.create_bounty.bind(controller));
