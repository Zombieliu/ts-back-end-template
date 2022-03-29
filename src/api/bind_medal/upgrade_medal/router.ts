import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/upgrade_medal', controller.upgrade_medal.bind(controller));
