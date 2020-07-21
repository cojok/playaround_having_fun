import express from 'express';

import { erase } from './erase';
import { getAllTrades, addTrade, getUsersTrades } from './trades';
import {
  getTradesWithFilter,
  getHighestLowestPriceInDateRange,
} from './stocks';

const router = express.Router();

router.get('/trades', getAllTrades);
router.post('/trades', addTrade);
router.get('/trades/users/:id', getUsersTrades);

router.delete('/erase', erase);

router.get('/stocks/:symbol/trades', getTradesWithFilter);
router.get('/stocks/:symbol/price', getHighestLowestPriceInDateRange);

export default router;
