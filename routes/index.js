const express = require("express");
const router = express.Router();
const active = require("./active/uesrAction.js");

router.get('/docs',active.findAll);
router.post("/docs",active.save);
router.update('/items',active.update);
router.delete('/item',active.remove);

module.exports = router;
