var express = require('express');
var router = express.Router();

router.get('/company', function (req, res, next) {
  res.render('company', {
    title: 'Muji無印良品',
    name: '許琦涓&黃子珈',
    id: '209410686s&209410215',
  });
});
module.exports = router;