import Router from '@koa/router';

import { HomeController } from './controller';

export const router = new Router();

const controller = new HomeController();

router.post('/post_faucet_token', controller.post_faucet_token.bind(controller));
