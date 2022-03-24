import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/evm_github_user', controller.evm_github_user.bind(controller));
