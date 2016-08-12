const express = require("express");
const router = express.Router();
const action = require("./action/userAction");

router.get('/result',action.findAll);
router.post("/docs",action.save);
// router.put('/items',action.update);
// router.delete('/item',action.remove);

module.exports = router;
