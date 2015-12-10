var MongoClient = require('mongodb').MongoClient;
  function addObject(collection, object){
      collection.insert(object, function(err, result){
          if(!err) {
              console.log("Inserted : ");
              console.log(result);
          }
    });
}
MongoClient.connect("mongodb://localhost/", function(err, db) {  
    var myDB = db.db("pokemon");
    myDB.dropCollection("Original152");
    myDB.createCollection("Original152", function(err, Original152){
      addObject(Original152, {name:"Bulbasaur", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
        type:"Grass", hp: 40, maxHp: 40, maxAttack: 7, minAttack: 6, defense: 2, evolution: 'Ivysaur', xp: 0, maxXP: 25, stone: null, pokedexNumber: 1, rarity: 60});

      addObject(Original152, {name:"Ivysaur", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
        type:"Grass", hp: 80, maxHp: 80, maxAttack: 17, minAttack: 14,  defense: 7, evolution: 'Venusaur', xp: 0, maxXP: 40, stone: null, pokedexNumber: 2, rarity: null});

      addObject(Original152, {name:"Venusaur", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif',
        type:"Grass", hp: 120, maxHp: 120, maxAttack: 30, minAttack: 25, defense: 15, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 3, rarity: null});

      addObject(Original152, {name:"Charmander", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
        type:"Fire", hp: 35, maxHp: 35, maxAttack: 10, minAttack: 8, defense: 1, evolution: 'Charmeleon', xp: 0, maxXP: 25, stone: null, pokedexNumber: 4, rarity: 60});

      addObject(Original152, {name:"Charmeleon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
        type:"Fire", hp: 60,  maxHp: 60, maxAttack: 20, minAttack: 16, defense: 6, evolution: 'Charizard', xp: 0, maxXP: 40, stone: null, pokedexNumber: 5, rarity: null});

      addObject(Original152, {name:"Charizard", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
        type:"Fire", hp: 100, maxHp: 100, maxAttack: 35, minAttack: 30, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 6, rarity: 99});

      addObject(Original152, {name:"Squirtle", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
        type:"Water", hp: 35, maxHp: 35, maxAttack: 7, minAttack: 5, defense:4, evolution: 'Wartortle', xp: 0, maxXP: 25, stone: null, pokedexNumber: 7, rarity: 60});

      addObject(Original152, {name:"Wartortle", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
        type:"Water", hp: 70, maxHp: 70, maxAttack: 15, minAttack: 10, defense: 9, evolution: 'Blastoise', xp: 0, maxXP: 40, stone: null, pokedexNumber: 8, rarity: null});

      addObject(Original152, {name:"Blastoise", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
        type:"Water", hp: 110, maxHp: 110, maxAttack: 25, minAttack:20, defense: 19, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 9, rarity: null});

      addObject(Original152, {name:"Caterpie", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif',
        type:"Bug", hp: 20, maxHp: 20, maxAttack: 6, minAttack: 5, defense: 2, evolution: 'Metapod', xp: 0, maxXP: 10, stone: null, pokedexNumber: 10, rarity: 0});

      addObject(Original152, {name:"Metapod", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif',
        type:"Bug", hp: 55, maxHp: 55, maxAttack: 6, minAttack: 5, defense: 4, evolution: 'Butterfree', xp: 0, maxXP: 15, stone: null, pokedexNumber: 11, rarity: 30});

      addObject(Original152, {name:"Butterfree", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif',
        type:"Bug", hp: 80, maxHp: 80, maxAttack: 23, minAttack: 20, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 12, rarity: 50});

      addObject(Original152, {name:"Weedle", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif',
        type:"Bug", hp: 18, maxHp: 18, maxAttack: 7, minAttack: 6, defense: 1, evolution: 'Kakuna', xp: 0, maxXP: 10, stone: null, pokedexNumber: 13, rarity: 15});

      addObject(Original152, {name:"Kakuna", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif',
        type:"Bug", hp: 50, maxHp: 50, maxAttack: 7, minAttack: 6, defense: 6, evolution: "Beedrill", xp: 0, maxXP: 15, stone: null, pokedexNumber: 14, rarity: 30});

      addObject(Original152, {name:"Beedrill", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif',
        type:"Bug", hp: 75, maxHp: 75, maxAttack: 25, minAttack: 22, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 15, rarity: 50});

      addObject(Original152, {name:"Pidgey", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif',
        type:"Flying", hp: 25, maxHp: 25, maxAttack: 7, minAttack: 4, defense: 2, evolution: 'Pidgeotto', xp: 0, maxXP: 20, stone: null, pokedexNumber: 16, rarity: 0});

      addObject(Original152, {name:"Pidgeotto", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif',
        type:"Flying", hp: 60, maxHp: 60, maxAttack: 13, minAttack: 10, defense: 5, evolution: 'Pidgeot', xp: 0, maxXP: 30, stone: null, pokedexNumber: 17, rarity: 40});

      addObject(Original152, {name:"Pidgeot", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
        type:"Flying", hp: 90, maxHp: 90, maxAttack: 25, minAttack: 18, defense: 9, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 18, rarity: 80});

      addObject(Original152, {name:"Rattata", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif',
        type:"Normal", hp: 20, maxHp: 20, maxAttack: 7, minAttack: 5, defense: 1, evolution: 'Raticate', xp: 0, maxXP: 20, stone: null, pokedexNumber: 19, rarity: 0});

      addObject(Original152, {name:"Raticate", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif',
        type:"Normal", hp: 80, maxHp: 80, maxAttack: 25, minAttack: 18, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 20, rarity: 50});

      addObject(Original152, {name:"Spearow", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif',
        type:"Flying", hp: 30, maxHp: 30, maxAttack: 8, minAttack: 5, defense: 1, evolution: 'Fearow', xp: 0, maxXP: 25, stone: null, pokedexNumber: 21, rarity: 5});

      addObject(Original152, {name:"Fearow", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif',
        type:"Flying", hp: 75, maxHp: 75, maxAttack: 20, minAttack: 14, defense: 7, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 22, rarity: 60});

      addObject(Original152, {name:"Ekans", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif',
        type:"Poison", hp: 30, maxHp: 30, maxAttack: 13, minAttack: 10, defense: 5, evolution: 'Arbok', xp: 0, maxXP: 30, stone: null, pokedexNumber: 23, rarity: 35});

      addObject(Original152, {name:"Arbok", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif',
        type:"Poison", hp:80, maxHp: 80, maxAttack: 22, minAttack: 18, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 24, rarity: 65});

      addObject(Original152, {name:"Pikachu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
        type:"Electric", hp: 40, maxHp: 40, maxAttack: 15, minAttack: 8, defense: 5, evolution: 'Raichu', xp: null, maxXP: null, stone: 'Lightning Stone', pokedexNumber: 25, rarity: 15});

      addObject(Original152, {name:"Raichu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif',
        type:"Electric", hp: 75, maxHp: 75, maxAttack: 25, minAttack: 20, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 26, rarity: null});

      addObject(Original152, {name:"Sandshrew", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif',
        type:"Ground", hp: 35, maxHp: 35, maxAttack: 12, minAttack: 10, defense: 9, evolution: 'Sandslash', xp: 0, maxXP: 30, stone: null, pokedexNumber: 27, rarity: 35});

      addObject(Original152, {name:"Sandslash", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif',
        type:"Ground", hp: 70, maxHp: 70, maxAttack: 18, minAttack: 15, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 28, rarity: 65});

      addObject(Original152, {name:"Nidoran (f)", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif',
        type:"Poison", hp: 25, maxHp: 25, maxAttack: 6, minAttack: 5, defense: 3, evolution: 'Nidorina', xp: 0, maxXP: 25, stone: null, pokedexNumber: 29, rarity: 15});

      addObject(Original152, {name:"Nidorina", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif',
        type:"Poison", hp: 60, maxHp: 60, maxAttack: 15, minAttack: 10, defense: 8, evolution: 'Nidoqueen', xp: null, maxXP: null, stone: "Moon Stone", pokedexNumber: 30, rarity: 45});

      addObject(Original152, {name:"Nidoqueen", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif',
        type:"Poison", hp: 105, maxHp: 105, maxAttack: 30, minAttack: 25, defense: 17, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 31, rarity: null});

      addObject(Original152, {name:"Nidoran (m)", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif',
        type:"Poison", hp: 25, maxHp: 25, maxAttack: 8, minAttack: 6, defense: 1, evolution: 'Nidorino', xp: 0, maxXP: 25, stone: null, pokedexNumber: 32, rarity: 15});

      addObject(Original152, {name:"Nidorino", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif',
        type:"Poison", hp: 60, maxHp: 60, maxAttack: 18, minAttack: 15, defense: 5, evolution: 'Nidoking', xp: null, maxXP: null, stone: "Moon Stone", pokedexNumber: 33, rarity: 45});

      addObject(Original152, {name:"Nidoking", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif',
        type:"Poison", hp: 105, maxHp: 105, maxAttack: 33, minAttack: 28, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 34, rarity: null});

      addObject(Original152, {name:"Clefairy", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif',
        type:"Normal", hp: 45, maxHp: 45, maxAttack: 13, minAttack: 10, defense: 6, evolution: 'Clefable', xp: null, maxXP: null, stone: "Moon Stone", pokedexNumber: 35, rarity: 60});

      addObject(Original152, {name:"Clefable", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif',
        type:"Normal", hp: 75, maxHp: 75, maxAttack: 18, minAttack: 15, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 36, rarity: null});

      addObject(Original152, {name:"Vulpix", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
        type:"Fire", hp: 35, maxHp: 35, maxAttack: 15, minAttack: 12, defense: 4, evolution: 'Ninetales', xp: null, maxXP: null, pokedexNumber: 37, rarity: 50});

      addObject(Original152, {name:"Ninetales", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif',
        type:"Fire", hp: 95, maxHp: 95, maxAttack: 28, minAttack: 25, defense: 9, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 38, rarity: null});

      addObject(Original152, {name:"Jigglypuff", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
        type:"Normal", hp: 45, maxHp: 45, maxAttack: 13, minAttack: 10, defense: 6, evolution: 'Wigglytuff', xp: null, maxXP: null, stone: "Moon Stone", pokedexNumber: 39, rarity: 40});

      addObject(Original152, {name:"Wigglytuff", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif',
        type:"Normal", hp: 75, maxHp: 75, maxAttack: 18, minAttack: 15, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 40, rarity: null});

      addObject(Original152, {name:"Zubat", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif',
        type:"Poison", hp: 20, maxHp: 20, maxAttack: 5, minAttack: 6, defense: 1, evolution: 'Golbat', xp: 0, maxXP: 25, stone: null, pokedexNumber: 41, rarity: 15});

      addObject(Original152, {name:"Golbat", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
        type:"Poison", hp: 50, maxHp: 50, maxAttack: 13, minAttack: 10, defense: 4, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 42, rarity: 55});

      addObject(Original152, {name:"Oddish", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif',
        type:"Grass",hp: 20, maxHp: 20, maxAttack: 6, minAttack: 5, defense: 2, evolution: 'Gloom', xp: 0, maxXP: 20, stone: null, pokedexNumber: 43, rarity: 25});

      addObject(Original152, {name:"Gloom", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif',
        type:"Grass", hp: 50, maxHp: 50, maxAttack: 12, minAttack: 10, defense: 4, evolution: 'Vileplume', xp: null, maxXP: null, stone: "Leaf Stone", pokedexNumber: 44, rarity: 45});

      addObject(Original152, {name:"Vileplume", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif',
        type:"Grass", hp: 90, maxHp: 90, maxAttack: 23, minAttack: 19, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 45, rarity: null});

      addObject(Original152, {name:"Paras", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif',
        type:"Bug", hp: 18, maxHp: 18, maxAttack: 6, minAttack: 4, defense: 1, evolution: 'Parasect', xp: 0, maxXP: 20, stone: null, pokedexNumber: 46, rarity: 20});

      addObject(Original152, {name:"Parasect", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif',
        type:"Bug", hp: 53, maxHp: 53, maxAttack: 12, minAttack: 10, defense: 4, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 47, rarity: 55});

      addObject(Original152, {name:"Venonat", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif',
        type:"Bug", hp: 22, maxHp: 22, maxAttack: 8, minAttack: 5, defense: 2, evolution: 'Venomoth', xp: 0, maxXP: 25, stone: null, pokedexNumber: 48, rarity: 35});

      addObject(Original152, {name:"Venomoth", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif', 
        type:"Bug", hp: 50, maxHp: 50, maxAttack: 18, minAttack: 15, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 49, rarity: 65});

      addObject(Original152, {name:"Diglett", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif',
        type:"Ground", hp: 23, maxHp: 23, maxAttack: 7, minAttack: 5, defense: 3, evolution: 'Dugtrio', xp: 0, maxXP: 25, stone: null, pokedexNumber: 50, rarity: 30});

      addObject(Original152, {name:"Dugtrio", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif',
        type:"Ground", hp: 65, maxHp: 65, maxAttack: 15, minAttack: 13, defense: 11, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 51, rarity: 65});

      addObject(Original152, {name:"Meowth", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
        type:"Normal", hp: 33, maxHp: 33, maxAttack: 9, minAttack: 7, defense: 6, evolution: 'Persian', xp: 0, maxXP: 30, stone: null, pokedexNumber: 52, rarity: 45});

      addObject(Original152, {name:"Persian", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif',
        type:"Normal", hp: 69, maxHp: 69, maxAttack: 22, minAttack: 20, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 53, rarity: 70});

      addObject(Original152, {name:"Psyduck", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',
        type:"Water", hp: 28, maxHp: 28, maxAttack: 10, minAttack: 5, defense: 4, evolution: 'Golduck', xp: 0, maxXP: 25, stone: null, pokedexNumber: 54, rarity: 35});

      addObject(Original152, {name:"Golduck", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif',
        type:"Water", hp: 63, maxHp: 63, maxAttack: 25, minAttack: 22, defense: 7, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 55, rarity: 70});

      addObject(Original152, { name:"Mankey", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif',
        type:"Fighting", hp: 35, maxHp: 35, maxAttack: 18, minAttack: 12, defense: 2, evolution: 'Primeape', xp: 0, maxXP: 30, stone: null, pokedexNumber: 56, rarity: 25});

      addObject(Original152, {name:"Primeape", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif',
        type:"Fighting", hp: 75, maxHp: 75, maxAttack: 28, minAttack: 25, defense: 5, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 57, rarity: 75});

      addObject(Original152, {name:"Growlithe", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
        type:"Fire", hp: 40, maxHp: 40, maxAttack: 12, minAttack: 10, defense: 4, evolution: 'Arcanine', xp: null, maxXP: null, stone: "Fire Stone", pokedexNumber: 58, rarity: 35});

      addObject(Original152, { name:"Arcanine", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif',
        type:"Fire", hp: 100, maxHp: 100, maxAttack: 30, minAttack: 20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 59, rarity: null});

      addObject(Original152, {name:"Poliwag", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif',
        type:"Water", hp: 20, maxHp: 20, maxAttack: 6, minAttack: 5, defense: 2, evolution: 'Poliwhirl', xp: 0, maxXP: 20, stone: null, pokedexNumber: 60, rarity: 25});

      addObject(Original152, {name:"Poliwhirl", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif',
        type:"Water", hp: 60, maxHp: 60, maxAttack: 18, minAttack: 12, defense: 6, evolution: 'Poliwrath', xp: null, maxXP: null, stone: "Water Stone", pokedexNumber: 61, rarity: 60});

      addObject(Original152, { name:"Poliwrath", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif',
        type:"Water", hp: 100, maxHp: 100, maxAttack: 29, minAttack: 20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 62,rarity: null});

      addObject(Original152, {name:"Abra", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif',
        type:"Psychic", hp: 15, maxHp: 15, maxAttack: 5, minAttack: 4, defense: 1, evolution: 'Kadabra', xp: 0, maxXP: 25, stone: null, pokedexNumber: 63, rarity: 35});

      addObject(Original152, {name:"Kadabra", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif',
        type:"Psychic", hp: 50, maxHp: 50, maxAttack: 25, minAttack: 15, defense: 3, evolution: 'Alakazam', xp: 0, maxXP: 50, stone: null, pokedexNumber: 64, rarity: 60});

      addObject(Original152, {name:"Alakazam", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
        type:"Psychic", hp: 90, maxHp: 90, maxAttack: 37, minAttack: 30, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 65, rarity: 95});

      addObject(Original152, {name:"Machop", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',
        type:"Fighting", hp: 35, maxHp: 35, maxAttack: 12, minAttack: 9, defense: 3, evolution: 'Machoke', xp: 0, maxXP: 25, stone: null, pokedexNumber: 66, rarity: 25});

      addObject(Original152, {name:"Machoke", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif',
        type:"Fighting", hp: 75, maxHp: 75, maxAttack: 23, minAttack: 20, defense: 7, evolution: 'Machamp', xp: 0, maxXP: 50, stone: null, pokedexNumber: 67, rarity: 70});

      addObject(Original152, {name:"Machamp", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif',
        type:"Fighting", hp: 100, maxHp: 100, maxAttack: 38, minAttack: 34, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 68, rarity: 95});

      addObject(Original152, {name:"Bellsprout", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif',
        type:"Grass", hp: 18, maxHp: 18, maxAttack: 7, minAttack: 5, defense: 1, evolution: 'Weepinbell', xp: 0, maxXP: 25, stone: null, pokedexNumber: 69, rarity: 20});

      addObject(Original152, {name:"Weepinbell", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif',
        type:"Grass", hp: 45, maxHp: 45, maxAttack: 10, minAttack: 9, defense: 4, evolution: 'Victreebel', xp: null, maxXP: null, stone: "Leaf Stone", pokedexNumber: 70, rarity: 55});

      addObject(Original152, {name:"Victreebel", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif',
        type:"Grass", hp: 85, maxHp: 85, maxAttack: 20, minAttack: 18, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 71, rarity: null});

      addObject(Original152, {name:"Tentacool", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif',
        type:"Water", hp: 25, maxHp: 25, maxAttack: 5, minAttack: 4, defense: 5, evolution: 'Tentacruel', xp: 0, maxXP: 30, stone: null, pokedexNumber: 72, rarity: 5});

      addObject(Original152, {name:"Tentacruel", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif',
        type:"Water", hp: 65, maxHp: 65, maxAttack: 12, minAttack: 10, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 73, rarity: 50});

      addObject(Original152, {name:"Geodude", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif',
        type:"Rock", hp: 30, maxHp: 30, maxAttack: 8, minAttack: 4, defense: 6, evolution: 'Graveler', xp: 0, maxXP: 25, stone: null, pokedexNumber: 74, rarity: 30});

      addObject(Original152, {name:"Graveler", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif',
        type:"Rock", hp: 70, maxHp: 70, maxAttack: 17, minAttack: 13, defense: 12, evolution: 'Golem', xp: 0, maxXP: 45, stone: null, pokedexNumber: 75, rarity: 70});

      addObject(Original152, {name:"Golem", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif',
        type:"Rock", hp: 110, maxHp: 110, maxAttack: 25, minAttack:20, defense: 22, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 76, rarity: 85});

      addObject(Original152, {name:"Ponyta", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif',
        type:"Fire", hp: 35, maxHp: 35, maxAttack: 12, minAttack: 10, defense: 4, evolution: 'Rapidash', xp: 0, maxXP: 35, stone: null, pokedexNumber: 77, rarity: 45});

      addObject(Original152, {name:"Rapidash", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif',
        type:"Fire", hp: 85, maxHp: 85, maxAttack: 26, minAttack:23, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 78, rarity: 75});

      addObject(Original152, {name:"Slowpoke", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif',
        type:"Water", hp: 25, maxHp: 25, maxAttack: 8, minAttack: 6, defense: 4, evolution: 'Slowbro', xp: null, maxXP: null, stone: "Water Stone", pokedexNumber: 79, rarity: 35});

      addObject(Original152, {name:"Slowbro", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif',
        type:"Water", hp: 75, maxHp: 75, maxAttack: 22, minAttack:20, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 80, rarity: null});

      addObject(Original152, {name:"Magnemite", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif',
        type:"Electric", hp: 30, maxHp: 30, maxAttack: 6, minAttack: 5, defense: 7, evolution: 'Magneton', xp: 0, maxXP: 35, stone: null, pokedexNumber: 81, rarity: 40});

      addObject(Original152, {name:"Magneton", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif',
        type:"Electric", hp: 60, maxHp: 60, maxAttack: 12, minAttack: 10, defense: 18, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 82, rarity: 75});

      addObject(Original152, {name:"Farfetch'd", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif',
        type:"Flying", hp: 65, maxHp: 65, maxAttack: 17, minAttack: 15, defense: 11, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 83, rarity: 35});

      addObject(Original152, {name:"Doduo", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif',
        type:"Flying", hp: 30, maxHp: 30, maxAttack: 8, minAttack: 6, defense:4, evolution: 'Dodrio', xp: 0, maxXP: 35, stone: null, pokedexNumber: 84, rarity: 35});

      addObject(Original152, {name:"Dodrio", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif',
        type:"Flying", hp: 60, maxHp: 60, maxAttack: 21, minAttack: 17, defense: 7, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 85, rarity: 70});

      addObject(Original152, {name:"Seel", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif',
        type:"Water", hp: 40, maxHp: 40, maxAttack: 12, minAttack: 10, defense: 6, evolution: 'Dewgong', xp: 0, maxXP: 40, stone: null, pokedexNumber: 86, rarity: 40});

      addObject(Original152, {name:"Dewgong", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif',
        type:"Ice", hp: 95, maxHp: 95, maxAttack: 30, minAttack: 20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 87, rarity: 85});

      addObject(Original152, {name:"Grimer", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif',
        type:"Poison", hp: 25, maxHp: 25, maxAttack: 6, minAttack: 5, defense: 2, evolution: 'Muk', xp: 0, maxXP: 30, stone: null, pokedexNumber: 88, rarity: 5});

      addObject(Original152, {name:"Muk", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif',
        type:"Poison", hp: 80, maxHp: 80, maxAttack: 22, minAttack: 15, defense: 11, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 89, rarity: 35});

      addObject(Original152, {name:"Shellder", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif',
        type:"Water", hp: 30, maxHp: 30, maxAttack: 7, minAttack: 5, defense:4, evolution: 'Cloyster', xp: null, maxXP: null, stone: "Water Stone", pokedexNumber: 90, rarity: 30});

      addObject(Original152, {name:"Cloyster", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif',
        type:"Ice", hp: 90, maxHp: 90, maxAttack: 23, minAttack: 20, defense: 19, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 91, rarity: null});

      addObject(Original152, {name:"Gastly", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif',
        type:"Ghost", hp: 15, maxHp: 15, maxAttack: 6, minAttack: 5, defense: 10, evolution: 'Haunter', xp: 0, maxXP: 20, stone: null, pokedexNumber: 92, rarity: 25});

      addObject(Original152, {name:"Haunter", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif',
        type:"Ghost", hp: 40, maxHp: 40, maxAttack: 12, minAttack: 10, defense: 17, evolution: 'Gengar', xp: 0, maxXP: 40, stone: null, pokedexNumber: 93, rarity: 50});

      addObject(Original152, {name:"Gengar", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
        type:"Ghost", hp: 85, maxHp: 85, maxAttack: 18, minAttack: 15, defense: 23, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 94, rarity: 90});

      addObject(Original152, {name:"Onix", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
        type:"Rock", hp: 90, maxHp: 90, maxAttack: 22, minAttack: 20, defense: 18, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 95, rarity: 50});

      addObject(Original152, {name:"Drowzee", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif',
        type:"Psychic", hp: 50, maxHp: 50, maxAttack: 12, minAttack: 8, defense: 10, evolution: 'Hypno', xp: 0, maxXP: 35, stone: null, pokedexNumber: 96, rarity: 40});

      addObject(Original152, {name:"Hypno", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif',
        type:"Psychic", hp: 100, maxHp: 100, maxAttack: 17, minAttack: 14, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 97, rarity: 75});

      addObject(Original152, {name:"Krabby", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif',
        type:"Water", hp: 30, maxHp: 30, maxAttack: 11, minAttack: 8, defense: 3, evolution: 'Kingler', xp: 0, maxXP: 30, stone: null, pokedexNumber: 98, rarity: 25});

      addObject(Original152, {name:"Kingler", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif',
        type:"Water", hp: 75, maxHp: 75, maxAttack: 25, minAttack:20, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 99, rarity: 70});

      addObject(Original152, {name:"Voltorb", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif',
        type: "Electric", hp: 40, maxHp: 40, maxAttack: 12, minAttack: 9, defense: 8, evolution: 'Electrode', xp: 0, maxXP: 30, stone: null, pokedexNumber: 100, rarity: 20});

      addObject(Original152, {name:"Electrode", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif',
        type: "Electric", hp:80, maxHp: 80, maxAttack: 19, minAttack: 18, defense: 15, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 101, rarity: 55});

      addObject(Original152, {name:"Exeggcute", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif',
        type: "Grass", hp: 30, maxHp: 30, maxAttack: 12, minAttack: 10, defense: 3, evolution: 'Exeggutor', xp: null, maxXP: null, stone: "Leaf Stone", pokedexNumber: 102, rarity: 35});

      addObject(Original152, {name:"Exeggutor", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif',
        type: "Grass", hp: 90, maxHp: 90, maxAttack: 21, minAttack:19, defense: 15, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 103, rarity: null});

      addObject(Original152, {name:"Cubone", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif',
        type: "Ground", hp: 30, maxHp: 30, maxAttack: 10, minAttack: 7, defense: 2, evolution: 'Marowak', xp: 0, maxXP: 30, stone: null, pokedexNumber: 104, rarity: 15});

      addObject(Original152, {name:"Marowak", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif', 
        type: "Ground", hp: 75, maxHp: 75, maxAttack: 25, minAttack:20, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 105, rarity: 45});

      addObject(Original152, {name:"Hitmonlee", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif',
        type: "Fighting", hp: 95, maxHp: 95, maxAttack: 25, minAttack:20, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 106, rarity: 60});

      addObject(Original152, {name:"Hitmonchan", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif',
        type: "Fighting", hp: 95, maxHp: 95, maxAttack: 30, minAttack: 25, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 107, rarity: 60});

      addObject(Original152, {name:"Lickitung", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif',
        type: "Normal", hp: 110, maxHp: 110, maxAttack: 18, minAttack: 10, defense: 16, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 108, rarity: 50});

      addObject(Original152, {name:"Koffing", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif', 
        type: "Poison", hp: 50, maxHp: 50, maxAttack: 12, minAttack: 10, defense: 7, evolution: 'Weezing', xp: 0, maxXP: 25, stone: null, pokedexNumber: 109, rarity: 10});

      addObject(Original152, {name:"Weezing", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif',
        type: "Poison", hp: 95, maxHp: 95, maxAttack: 18, minAttack: 12, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 110, rarity: 45});

      addObject(Original152, {name:"Rhyhorn", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif',
        type: "Ground", hp:80, maxHp: 80, maxAttack: 12, minAttack: 10, defense: 7, evolution: 'Rhydon', xp: 0, maxXP: 40, stone: null, pokedexNumber: 111, rarity: 40});

      addObject(Original152, {name:"Rhydon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif',
        type: "Ground", hp: 115, maxHp: 115, maxAttack: 28, minAttack:25, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 112, rarity: 95});

      addObject(Original152, {name:"Chansey", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif',
        type: "Normal", hp: 160, maxHp: 160, maxAttack: 15, minAttack: 13, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 113, rarity: 70});

      addObject(Original152, {name:"Tangela", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif',
        type: "Grass", hp: 60, maxHp: 60, maxAttack: 15, minAttack: 10, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 114, rarity: 15});

      addObject(Original152, {name:"Kangaskhan", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif',
        type: "Normal", hp: 100, maxHp: 100, maxAttack: 20, minAttack: 19, defense: 13, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 115, rarity: 50});

      addObject(Original152, {name:"Horsea", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif',
        type: "Water", hp: 40, maxHp: 40, maxAttack: 10, minAttack: 7, defense: 5, evolution: 'Seadra', xp: 0, maxXP: 40, stone: null, pokedexNumber: 116, rarity: 30});

      addObject(Original152, {name:"Seadra", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif',
        type: "Water", hp:85, maxHp: 85, maxAttack: 20, minAttack: 13, defense: 5, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 117, rarity: 80});

      addObject(Original152, {name:"Goldeen", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif',
        type: "Water", hp: 35, maxHp: 35, maxAttack: 9, minAttack: 8, defense: 2, evolution: 'Seaking', xp: 0, maxXP: 25, stone: null, pokedexNumber: 118, rarity: 10});

      addObject(Original152, {name:"Seaking", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif',
        type: "Water", hp: 75, maxHp: 75, maxAttack: 15, minAttack: 12, defense: 9, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 119, rarity: 55});

      addObject(Original152, {name:"Staryu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif',
        type: "Water", hp: 40, maxHp: 40, maxAttack: 9, minAttack: 7, defense: 6, evolution: 'Starmie', xp: null, maxXP: null, stone: "Water Stone", pokedexNumber: 120, rarity: 20});

      addObject(Original152, {name:"Starmie", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif',
        type: "Water", hp: 75,  maxHp: 75, maxAttack: 21, minAttack:20, defense: 11, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 121, rarity: null});

      addObject(Original152, {name:"Mr. Mime", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif',
        type: "Psychic", hp:80, maxHp: 80, maxAttack: 18, minAttack: 16, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 122, rarity: 50});

      addObject(Original152, {name:"Scyther", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif',
        type: "Bug", hp: 65, maxHp: 65, maxAttack: 23, minAttack: 15, defense: 6, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 123, rarity: 40});

      addObject(Original152, {name:"Jynx", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif',
        type: "Ice", hp:80, maxHp: 80, maxAttack:23, minAttack:20, defense:7, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 124, rarity: 50});

      addObject(Original152, {name:"Electabuzz", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif',
        type: "Electric", hp:90, maxHp: 90, maxAttack: 26, minAttack:20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 125, rarity: 40});

      addObject(Original152, {name:"Magmar", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif',
        type: "Fire", hp: 90, maxHp: 90, maxAttack: 26, minAttack:20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 126, rarity: 40});

      addObject(Original152, {name:"Pinsir", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif',
        type: "Bug", hp: 65, maxHp: 65, maxAttack: 23, minAttack:20, defense: 11, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 127, rarity: 40});

      addObject(Original152, {name:"Tauros", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif',
        type: "Normal", hp: 100, maxHp: 100, maxAttack: 29, minAttack:20, defense: 8, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 128, rarity: 40});

      addObject(Original152, {name:"Magikarp", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif',
        type: "Water", hp: 15, maxHp: 15, maxAttack: 3, minAttack: 1, defense: 2, evolution: 'Gyarados', xp: 0, maxXP: 50, stone: null, pokedexNumber: 129, rarity: 0});

      addObject(Original152, {name:"Gyarados", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
        type: "Water", hp: 115, maxHp: 115, maxAttack: 35, minAttack: 25, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 130, rarity: 80});

      addObject(Original152, {name:"Lapras", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif',
        type: "Ice", hp: 95, maxHp: 95, maxAttack: 29, minAttack:20, defense: 16, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 131, rarity: 50});

      addObject(Original152, {name:"Ditto", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif',
        type: "Normal", hp:80, maxHp: 80, maxAttack: 6, minAttack: 3, defense:4, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 132, rarity: 70});

      addObject(Original152, {name:"Eevee", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
        type: "Normal", hp: 30, maxHp: 30, maxAttack: 7, minAttack: 5, defense: 2, evolution: ['Vaporeon', 'Jolteon', 'Flareon'], xp: null, maxXP: null, stone: ['Water Stone', 'Lightning Stone', 'Fire Stone'], pokedexNumber: 133, rarity: 35});
      addObject(Original152, {name:"Vaporeon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif',
        type: "Water", hp: 100, maxHp: 100, maxAttack: 25, minAttack:20, defense: 9, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 134, rarity: 85});

      addObject(Original152, {name:"Jolteon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif',
        type: "Electric", hp: 90, maxHp: 90, maxAttack: 30, minAttack:20, defense: 9, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 135, rarity: 85});

      addObject(Original152, {name:"Flareon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif',
        type: "Fire", hp: 90, maxHp: 90, maxAttack: 25, minAttack:20, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 136, rarity: 85});

      addObject(Original152, {name:"Porygon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif',
        type: "Normal", hp:80, maxHp: 80, maxAttack: 24, minAttack:20, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 137, rarity: 90});

      addObject(Original152, {name:"Omanyte", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif',
        type: "Water", hp: 50, maxHp: 50, maxAttack: 12, minAttack: 10, defense: 8, evolution: 'Omastar', xp: 0, maxXP: 35, stone: null, pokedexNumber: 138, rarity: 50});

      addObject(Original152, {name:"Omastar", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif',
        type: "Water", hp: 90, maxHp: 90, maxAttack: 20, minAttack: 18, defense: 16, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 139, rarity: 80});

      addObject(Original152, {name:"Kabuto", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif',
        type: "Rock", hp: 30, maxHp: 30, maxAttack: 15, minAttack: 12, defense: 4, evolution: 'Kabutops', xp: 0, maxXP: 35, stone: null, pokedexNumber: 140, rarity: 50});

      addObject(Original152, {name:"Kabutops", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif',
        type: "Rock", hp:80, maxHp: 80, maxAttack: 25, minAttack: 20, defense: 10, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 141, rarity: 80});

      addObject(Original152, {name:"Aerodactyl", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif',
        type: "Rock", hp: 120, maxHp: 120, maxAttack: 35, minAttack: 30, defense: 16, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 142, rarity: 80});

      addObject(Original152, {name:"Snorlax", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',
        type: "Normal", hp: 140, maxHp: 140, maxAttack: 30, minAttack: 25, defense: 20, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 143, rarity: 40});

      addObject(Original152, {name:"Articuno", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif',
        type: "Ice", hp:120, maxHp: 120, maxAttack: 40, minAttack: 35, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 144, rarity: 95});

      addObject(Original152, {name:"Zapdos", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif',
        type: "Electric", hp: 120, maxHp: 120, maxAttack: 40, minAttack: 35, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 145, rarity: 95});

      addObject(Original152, {name:"Moltres", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif',
        type: "Fire", hp: 120, maxHp: 120, maxAttack: 40, minAttack: 35, defense: 14, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 146, rarity: 95});

      addObject(Original152,{name:"Dratini", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
        type: "Dragon", hp: 25, maxHp: 25, maxAttack: 7, minAttack: 5, defense: 3, evolution: 'Dragonair', xp: 0, maxXP: 30, stone: null, pokedexNumber: 147, rarity: 45});

      addObject(Original152, {name:"Dragonair", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
        type: "Dragon", hp: 70, maxHp: 70, maxAttack: 19, minAttack: 14, defense: 7, evolution: 'Dragonite', xp: 0, maxXP: 60, stone: null, pokedexNumber: 148, rarity: 75});

      addObject(Original152, {name:"Dragonite", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
        type: "Dragon", hp: 120, maxHp: 120, maxAttack: 38, minAttack: 35, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 149, rarity: 95});

      addObject(Original152, {name:"Mewtwo", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif',
        type: "Psychic", hp: 110, maxHp: 110, maxAttack: 43, minAttack: 35, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 150, rarity: null});

      addObject(Original152, {name:"Mew", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
        type: "Psychic", hp: 90, maxHp: 90, maxAttack: 45, minAttack: 30, defense: 12, evolution: null, xp: null, maxXP: null, stone: null, pokedexNumber: 151, rarity: null});
    });  
  setTimeout(function(){ db.close(); }, 3000);
});


