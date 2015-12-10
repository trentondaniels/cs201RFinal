var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');
var UserSchema = new mongoose.Schema({
  user: String,
  logMethodId: String,
  win: {type: Number, default: 0},
  loss: {type: Number, default: 0},
  picture: {type: String, default: "http://commonstake.com/default_profile.jpg"},
  achievements: Object,
  storyProgress: {type: Number, default: 0},
  activePokemon: Object,
  inactivePokemon: Object,
  pokedex: Object,
  gymLeader: {type: Boolean, default: false},
  cash: {type: Number, default: 1000},
  backpack: Object,
  settings: Object,
});

UserSchema.methods.tallyLoss = function(cb) {
  this.loss += 1;
  this.save(cb);
};

UserSchema.methods.saveRoster = function(user, cb) {
	this.activePokemon = user.activePokemon;
  this.inactivePokemon = user.inactivePokemon;
  this.markModified('activePokemon');
  this.markModified('inactivePokemon');
	this.save(cb);
};
UserSchema.methods.newActive = function(pokemon, cb) {
  this.activePokemon.push(pokemon);
  this.pokedex[pokemon.pokedexNumber - 1].caught = true;
  this.markModified('activePokemon');
  this.markModified('pokedex');
  this.save(cb);
};
UserSchema.methods.newInactive = function(pokemon, cb) {
  this.inactivePokemon.push(pokemon);
  this.pokedex[pokemon.pokedexNumber - 1].caught = true;
  this.markModified('inactivePokemon');
  this.markModified('pokedex');
  this.save(cb);
};
UserSchema.methods.editProfile = function(user, cb) {
  this.user = user.user;
  this.picture = user.picture
  this.save(cb);
};
UserSchema.methods.newEntry = function(entry, cb) {
  this.pokedex[entry.pokedexNumber - 1].name = entry.name;
  this.pokedex[entry.pokedexNumber - 1].type = entry.type;
  this.pokedex[entry.pokedexNumber - 1].avatarUrl = entry.avatarUrl;
  this.markModified('pokedex');
  this.save(cb);
};

UserSchema.methods.purchase = function(item, cb) {
  itemExists = false;
  for (i=0; i < this.backpack.length; i++) {
    if (this.backpack[i].name === item.name) {
      itemExists = true;
      itemExistsAt = i;
    }
  }
  if (itemExists) {
    this.backpack[itemExistsAt].quantity += item.quantity;
  }
  else {
    this.backpack.push(item);
  }
  this.cash -= (item.price * item.quantity);
  this.markModified('backpack');
  this.save(cb);
};

UserSchema.methods.update = function(user, cb) {
  this.activePokemon = user.activePokemon;
  this.storyProgress = user.storyProgress;
  this.cash = user.cash;
  this.win = user.win
  this.backpack = user.backpack;
  this.markModified("backpack")
  this.markModified("activePokemon")
  this.save(cb);
};

UserSchema.methods.pokeball = function(user, cb) {
  this.backpack = user.backpack;
  this.markModified("backpack");
  this.save(cb);
}

UserSchema.set('versionKey', false);
mongoose.model('User', UserSchema, 'Users');
