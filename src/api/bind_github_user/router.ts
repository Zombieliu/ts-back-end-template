import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/bind_github_user', controller.bind_github_user.bind(controller));
