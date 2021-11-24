var express = require('express');
var router = express.Router();
var POST = require('./post')

router.use("/post", POST)

module.exports = router;
