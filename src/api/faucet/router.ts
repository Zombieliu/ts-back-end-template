import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/faucet', controller.faucet.bind(controller));
