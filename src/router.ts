import Router from '@koa/router';

import { router as homeRouter } from './api/home/router';
import { router as evm_github_user } from './api/evm_github_user/router';
import { router as get_evm_github_user } from './api/get_evm_github_user/router';
import { router as bind_github_user } from './api/bind_github_user/router';

export const router = new Router();

const apigetRouters = [
  homeRouter,
  evm_github_user,
  get_evm_github_user,
  bind_github_user,

];

for (const apiRouter of apigetRouters) {
  router.use('/api', apiRouter.routes(), apiRouter.allowedMethods({ throw: true }));
}

