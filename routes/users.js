var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.param('_id', function(req, res, next, id) {
  var query = User.findById(id);
  query.exec(function (err, editUser){
    if (err) { return next(err); }
    if (!editUser) { return next(new Error("can't find comment")); }
    req.editUser = editUser;
    return next();
  });
});

router.get('/rival', function(req, res, next) {
    User.find({user: {$ne: req.user.user}, gymLeader: false}, function(err, users) {
        if(err){ return next(err); }
        var i = Math.floor(Math.random() * (users.length));
        res.json(users[i]);
  });
});

router.get('/gymLeader', function(req, res, next) {
  User.find({gymLeader: true}, function(err, users) {
      if(err){ return next(err); }
      if (req.user.storyProgress >= users.length) {
        var i = Math.floor(Math.random() * (users.length))
      }
      else {
        var i = req.user.storyProgress;
      }
      res.json(users[i]);
  });
});

router.get('/me', function(req, res, next) {
 res.send(req.user)
});

router.put('/:_id', function(req, res, next) {
  req.editUser.editProfile(req.body, function(err, user){
    if (err) {return next(err);}
    req.user.user = req.body.user;
    req.user.picture = req.body.picture;
    res.json(user);
  });
});

router.put('/:_id/loss', function(req, res, next) {
  req.editUser.tallyLoss(function(err, user){
    if (err) { return next(err); }
    if (req.user.user === req.editUser.user) {
      req.user.loss += 1;
    }
    res.json(user);
  });
});


router.put('/:_id/roster', function(req, res, next) {
  req.editUser.saveRoster(req.body, function(err, user){
    if(err) { return next(err); }
    req.user.activePokemon = req.body.activePokemon;
    req.user.inactivePokemon = req.body.inactivePokemon;
    res.json(user);
  });
});

router.put('/:_id/newActive', function(req, res, next) {
  req.editUser.newActive(req.body, function(err, user) {
    if(err) {return next(err);}
    req.user.activePokemon.push(req.body);
    req.user.pokedex[req.body.pokedexNumber - 1].caught = true;
    res.json(user)
  });
});

router.put('/:_id/newInactive', function(req, res, next) {
  req.editUser.newInactive(req.body, function(err, user) {
    if(err) {return next(err);}
    req.user.inactivePokemon.push(req.body);
    req.user.pokedex[req.body.pokedexNumber - 1].caught = true;
    res.json(user)
  });
});

router.put('/:_id/newSighting', function(req, res, next) {
  req.editUser.newEntry(req.body, function(err, user) {
    if(err) {return next(err);}
    req.user.pokedex[req.body.pokedexNumber - 1].name = req.body.name;
    req.user.pokedex[req.body.pokedexNumber - 1].type = req.body.type;
    req.user.pokedex[req.body.pokedexNumber - 1].avatarUrl = req.body.avatarUrl;
    res.json(user)
  });
});

router.post('/:_id/item', function(req, res, next) {
  req.editUser.purchase(req.body, function(err, user) {
    if(err) {return next(err);}
    itemExists = false;
    for (i=0; i < req.user.backpack.length; i++) {
      if (req.user.backpack[i].name === req.body.name) {
        itemExists = true;
        itemExistsAt = i;
      }
    }
    if (itemExists) {
      req.user.backpack[itemExistsAt].quantity += req.body.quantity;
    }
  else {
    req.user.backpack.push(req.body);
  }
    req.user.cash -= (req.body.price * req.body.quantity);
    res.json(user);
  });
});

router.put('/:_id/update', function(req, res, next) {
  req.editUser.update(req.body, function(err, user) {
    if(err) {return next(err);}
    req.user.activePokemon = req.body.activePokemon;
    req.user.cash = req.body.cash
    req.user.storyProgress = req.body.storyProgress;
    req.user.win = req.body.win;
    req.user.backpack = req.body.backpack
    res.json(user);
  })
});
router.put('/:_id/pokeball', function(req, res, next) {
  req.editUser.pokeball(req.body, function(err, user) {
    if(err) {return next(err);}
    req.user.backpack = req.body.backpack;
    res.json(user);
  });
});

module.exports = router;
