const express = require("express");

const PlafondsCtrl = require("../controllers/plafonds-ctrl");

const router = express.Router();

router.put("/plafonds", PlafondsCtrl.updatePlafonds);
router.get("/plafonds/:id", PlafondsCtrl.getPlafondsByUser);

module.exports = router;
