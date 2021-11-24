var express = require('express');
var router = express.Router();
var POST_ROUTER = require('./PostRouter/index')

router.use("/v0/", POST_ROUTER)

module.exports = router;
