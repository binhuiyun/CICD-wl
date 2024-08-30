import express from 'express';
import {addWatchList, addStockToWatchList, getWatchLists } from '../controllers/watchlists.controller.js';

const router = express.Router();

router.get('/', getWatchLists);
router.post('/add', addWatchList);
router.post('/addStock', addStockToWatchList);

export default router;