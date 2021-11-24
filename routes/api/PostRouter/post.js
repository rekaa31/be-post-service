var express = require('express');
var router = express.Router();
var {getPost} = require('../../../controllers/postController');

router.get("/", getPost)

module.exports = router;
