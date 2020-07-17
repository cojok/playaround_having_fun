import express from 'express';

import { erase } from './erase';

const router = express.Router();

router.delete('/erase', erase);

export default router;
