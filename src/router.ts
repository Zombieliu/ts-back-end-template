import Router from '@koa/router';

import { router as homeRouter } from './api/home/router';
import { router as get_create_bounty_verify } from './api/create-bounty/get_create_bounty_verify/router';
import { router as bind_github_user } from './api/bind_github_user/router';
import { router as create_bounty } from './api/create-bounty/create_bounty/router';
import { router as get_create_bounty_review } from './api/create-bounty/get_create_bounty_review/router';
import { router as get_create_bounty_pending } from './api/create-bounty/get_create_bounty_pending/router';
import { router as get_create_bounty_conduct } from './api/create-bounty/get_create_bounty_conduct/router';
import { router as get_create_bounty_complete } from './api/create-bounty/get_create_bounty_complete/router';
import { router as get_create_bounty_complete_all } from './api/create-bounty/get_create_bounty_complete_all/router';
import { router as get_create_bounty_conduct_all } from './api/create-bounty/get_create_bounty_conduct_all/router';
import { router as get_create_bounty_pending_all } from './api/create-bounty/get_create_bounty_pending_all/router';
import { router as get_create_bounty_review_all } from './api/create-bounty/get_create_bounty_review_all/router';
import { router as get_create_bounty_verify_all } from './api/create-bounty/get_create_bounty_verify_all/router';
import { router as claim_bounty } from   './api/claim-bounty/claim_bounty/router';
import { router as get_bounty_all } from './api/get_bounty_all/router';
import { router as get_claim_bounty_pending } from './api/claim-bounty/get_claim_bounty_pending/router';
import { router as get_claim_bounty_withdraw } from './api/claim-bounty/get_claim_bounty_withdraw/router';
import { router as get_claim_bounty_review } from './api/claim-bounty/get_claim_bounty_review/router';
import { router as get_claim_bounty_completed } from './api/claim-bounty/get_claim_bounty_completed/router';
import { router as get_claim_bounty_complete_all } from './api/claim-bounty/get_claim_bounty_complete_all/router';
import { router as get_claim_bounty_withdraw_all } from './api/claim-bounty/get_claim_bounty_withdraw_all/router';
import { router as get_claim_bounty_review_all } from './api/claim-bounty/get_claim_bounty_review_all/router';
import { router as get_claim_bounty_pending_all } from './api/claim-bounty/get_claim_bounty_pending_all/router';
import { router as create_bounty_pending_conduct } from './api/alter/create_bounty_pending_conduct/router';
import { router as get_submiturl_claim_bounty } from './api/submit_claim_bounty/get_submiturl_claim_bounty/router';
import { router as bind_medal } from './api/bind_medal/router';
import { router as get_medal } from './api/get_medal/router';
import { router as upgrade_medal } from './api/bind_medal/upgrade_medal/router';
import { router as get_create_bounty_state } from './api/alter/get_create_bounty_state/router';
import { router as create_bounty_conduct_verify } from './api/alter/create_bounty_conduct_verify/router';
import { router as submit_claim_bounty } from './api/submit_claim_bounty/router';
import { router as cliam_bounty_pending_review } from './api/alter/cliam_bounty_pending_review/router';
import { router as get_claim_bounty_content } from './api/alter/get_claim_bounty_content/router';
import { router as cliam_bounty_review_withdraw } from './api/alter/cliam_bounty_review_withdraw/router';
import { router as get_claim_bounty_url } from './api/alter/get_claim_bounty_url/router';
import { router as create_bounty_verify_finish } from './api/alter/create_bounty_verify_finish/router';
import { router as get_claim_bounty_state } from './api/alter/get_claim_bounty_state/router';
import { router as cliam_bounty_withdraw_finish } from './api/alter/cliam_bounty_withdraw_finish/router';
import { router as faucet } from './api/faucet/router';
import { router as get_facucet_user } from './api/faucet/get_faucet_user/router'
import { router as post_faucet_token } from './api/faucet/post_faucet_token/router'
import { router as get_bounty_particpants_submissions } from './api/get_bounty_particpants_submissions/router';
import { router as create_bounty_submissions } from './api/alter/create_bounty_submissions/router';
import { router as claim_bounty_submissions } from './api/alter/claim_bounty_submissions/router';
export const router = new Router();
const apigetRouters = [
  homeRouter,
  bind_github_user,
  create_bounty,
  get_create_bounty_review, get_create_bounty_verify, get_create_bounty_pending, get_create_bounty_conduct, get_create_bounty_complete,
  get_create_bounty_complete_all, get_create_bounty_conduct_all, get_create_bounty_pending_all, get_create_bounty_review_all, get_create_bounty_verify_all,
  get_bounty_all,
  claim_bounty,
  get_claim_bounty_pending, get_claim_bounty_withdraw, get_claim_bounty_review,get_claim_bounty_completed,
  get_claim_bounty_complete_all,get_claim_bounty_withdraw_all,get_claim_bounty_review_all,get_claim_bounty_pending_all,get_bounty_particpants_submissions,
  create_bounty_pending_conduct,get_create_bounty_state,create_bounty_conduct_verify,cliam_bounty_withdraw_finish,
  bind_medal,
  get_medal,get_claim_bounty_content,get_claim_bounty_url,
  upgrade_medal,
  submit_claim_bounty,get_submiturl_claim_bounty,
  cliam_bounty_pending_review,cliam_bounty_review_withdraw,create_bounty_verify_finish,get_claim_bounty_state,
  faucet,get_facucet_user,post_faucet_token,
  create_bounty_submissions,claim_bounty_submissions,


];

for (const apiRouter of apigetRouters) {
  router.use('/api', apiRouter.routes(), apiRouter.allowedMethods({ throw: true }));
}

