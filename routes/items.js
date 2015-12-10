var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

router.get('', function(req, res, next) {
  Item.find(function(err, items){
    if(err){ return next(err); }
    res.json(items);
  });
});

module.exports = router;
