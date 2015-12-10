var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');

router.param('name', function(req, res, next, name) {
  console.log("in param")
  var query = Pokemon.findOne({name: name});
  query.exec(function (err, evolvePokemon){
    if (err) { return next(err); }
    if (!evolvePokemon) { return next(new Error("can't find Pokemon")); }
    req.pokemon = evolvePokemon;
    return next();
  });
});


router.get('', function(req, res, next) {
  Pokemon.find(function(err, pokemon){
    if(err){ return next(err); }
    res.json(pokemon);
  });
});
router.get('/types', function(req, res, next) {
  Pokemon.distinct("type", function(err, types){
    if(err){ return next(err); }
    res.send(types);
  });
});
router.get('/starters', function(req, res, next) {
	Pokemon.find({$or: [{pokedexNumber: 1 }, {pokedexNumber: 4}, {pokedexNumber: 7}]}, function(err, pokemon){
		if(err) {return next(err);}
		res.json(pokemon);
	});
});
router.get('/random', function(req, res, next) {
  var range = Math.floor(Math.random() * (101));
  Pokemon.find({rarity: {$lte: range}}, function(err, list) {
    if(err) {return next(err);}
    var i = Math.floor(Math.random() * (list.length));
    res.json(list[i])
  })
})
router.get('/evolution/:name', function(req, res, next){
  console.log("in get");
  res.json(req.pokemon)
})

module.exports = router;
