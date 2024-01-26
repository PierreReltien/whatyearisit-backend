var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
 const date = new Date();
 const year = date.getFullYear(date)
 res.json({ year: year });
});

module.exports = router;