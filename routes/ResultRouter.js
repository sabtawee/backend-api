const express = require("express");
const { getDate, getWeightComblie, insertScrap, getDataInsertChar } = require('../controllers/ResultController')

const router = express.Router();

router.get("/result/:date", getDate);
router.get("/comblie", getWeightComblie);
router.post("/save-data", insertScrap);
router.get("/chart-data", getDataInsertChar);

module.exports = router;