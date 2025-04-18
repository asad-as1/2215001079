const express = require('express');
const router = express.Router();
const math = require('../controller/r');

router.get('/:numberid', math.all);
module.exports = router;