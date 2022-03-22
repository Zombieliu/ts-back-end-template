import Router from '@koa/router';

import { router as homeRouter } from './api/home/router';


export const router = new Router();

const apigetRouters = [
  homeRouter,
];

for (const apiRouter of apigetRouters) {
  router.use('/api', apiRouter.routes(), apiRouter.allowedMethods({ throw: true }));
}

