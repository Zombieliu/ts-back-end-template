import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_facucet_user', controller.get_facucet_user.bind(controller));
