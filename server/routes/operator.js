var express = require('express');
var router = express.Router();
var userAction = requireRoot('/actions/operator');

router.get('/', userAction.get);

module.exports = router;
