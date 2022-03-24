import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.get('/get_evm_github_user', controller.get_evm_github_user.bind(controller));
