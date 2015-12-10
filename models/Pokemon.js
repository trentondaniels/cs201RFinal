var mongoose = require('mongoose');
var PokemonSchema = new mongoose.Schema({
  name: String,
  avatarUrl: String,
  type: String,
  hp: Number,
  maxHp: Number,
  maxAttack: Number,
  minAttack: Number,
  defense: Number,
  evolution: String,
  xp: {type: Number, default: 0},
  maxXP: Number,
  stone: String,
  pokedexNumber: Number,
  rarity: Number
});
mongoose.model('Pokemon', PokemonSchema, 'Original152');
