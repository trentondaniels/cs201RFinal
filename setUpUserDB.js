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
  myDB.dropCollection("Users");
  myDB.createCollection("Users", function(err, Users){ 
    addObject(Users, {
      user: "Brock",
      gymLeader: true,
      achievements: {title: "Between a Rock and a Hard Place", description: "Defeated Brock", reward: "Boulder Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_brock.png',
      activePokemon: [
        {name:"Geodude", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif',
          type:"Rock", hp: 30, maxHp: 30, maxAttack: 8, minAttack: 4, defense: 6, pokedexNumber: 74},
        {name:"Onix", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
          type:"Rock", hp: 45, maxHp: 45, maxAttack: 12, minAttack: 6, defense: 10, pokedexNumber: 95}
      ]
    });
    addObject(Users, {
      user: "Misty",
      gymLeader: true,
      achievements: {title: "Go with the Flow", description: "Defeated Misty", reward: "Cascade Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_misty.png',
      activePokemon: [
        {name:"Staryu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif',
          type:"Water", hp: 35, maxHp: 35, maxAttack: 10, minAttack: 6, defense: 3, pokedexNumber: 120},
        {name:"Starmie", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif',
          type:"Water", hp: 50, maxHp: 50, maxAttack: 18, minAttack: 12, defense: 6, pokedexNumber: 121}
      ]
    });
    addObject(Users, {
      user: "Lt. Surge",
      gymLeader: true,
      achievements: {title: "1.21 Gigawatts", description: "Defeated Lt. Surge", reward: "Thunder Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_lt_surge.png',
      activePokemon: [
        {name:"Voltorb", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif',
          type:"Electric", hp: 40, maxHp: 40, maxAttack: 12, minAttack: 9, defense: 8, pokedexNumber: 100},
        {name:"Pikachu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
          type:"Electric", hp: 40, maxHp: 40, maxAttack: 18, minAttack: 12, defense: 5, pokedexNumber: 25},
        {name:"Raichu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif',
          type:"Electric", hp: 70, maxHp: 70, maxAttack: 22, minAttack: 18, defense: 8, pokedexNumber: 26}
      ]
    });
    addObject(Users, {
      user: "Erika",
      gymLeader: true,
      achievements: {title: "Stop to Smell the Roses", description: "Defeated Erika", reward: "Rainbow Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_erika.png',
      activePokemon: [
        {name:"Victreebel", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif',
          type:"Grass", hp: 75, maxHp: 75, maxAttack: 20, minAttack: 18, defense: 8, pokedexNumber: 100},
        {name:"Tangela", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif',
          type:"Grass", hp: 70, maxHp: 70, maxAttack: 18, minAttack: 14, defense: 6, pokedexNumber: 25},
        {name:"Vileplume", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif',
          type:"Grass", hp: 80, maxHp: 80, maxAttack: 23, minAttack: 19, defense: 10, pokedexNumber: 45}
      ]
    });
    addObject(Users, {
      user: "Koga",
      gymLeader: true,
      achievements: {title: "Silent, but Deadly", description: "Defeated Koga", reward: "Soul Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_koga.png',
      activePokemon: [
        {name:"Koffing", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif',
          type:"Poison", hp: 70, maxHp: 70, maxAttack: 18, minAttack: 14, defense: 8, pokedexNumber: 109},
        {name:"Koffing", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif',
          type:"Poison", hp: 70, maxHp: 70, maxAttack: 18, minAttack: 14, defense: 8, pokedexNumber: 109},
        {name:"Muk", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif',
          type:"Poison", hp: 80, maxHp: 80, maxAttack: 22, minAttack: 18, defense: 10, pokedexNumber: 89},
        {name:"Weezing", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif',
          type:"Poison", hp: 95, maxHp: 95, maxAttack: 23, minAttack: 18, defense: 12, pokedexNumber: 110}
      ]
    });
    addObject(Users, {
      user: "Sabrina",
      gymLeader: true,
      achievements: {title: "The Teenage Witch", description: "Defeated Sabrina", reward: "Marsh Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_sabrina.png',
      activePokemon: [
        {name:"Kadabra", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif',
          type:"Psychic", hp: 50, maxHp: 50, maxAttack: 25, minAttack: 15, defense: 5, pokedexNumber: 64},
        {name:"Mr. Mime", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif',
          type:"Psychic", hp: 80, maxHp: 80, maxAttack: 18, minAttack: 16, defense: 14, pokedexNumber: 122},
        {name:"Venomoth", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif',
          type:"Bug", hp: 70, maxHp: 70, maxAttack: 20, minAttack: 15, defense: 8, pokedexNumber: 49},
        {name:"Alakazam", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
          type:"Psychic", hp: 90, maxHp: 90, maxAttack: 37, minAttack: 30, defense: 5, pokedexNumber: 65}
      ]
    });
    addObject(Users, {
      user: "Blaine",
      gymLeader: true,
      achievements: {title: "Get Out of the Kitchen", description: "Defeated Blaine", reward: "Volcano Badge"},
      picture: 'http://pldh.net/media/gyms_elites/ban_blaine.png',
      activePokemon: [
        {name:"Growlithe", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
          type:"Fire", hp: 70, maxHp: 70, maxAttack: 16, minAttack: 14, defense: 7, pokedexNumber: 58},
        {name:"Ponyta", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif',
          type:"Fire", hp: 75, maxHp: 75, maxAttack: 20, minAttack: 14, defense: 6, pokedexNumber: 77},
        {name:"Rapidash", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif',
          type:"Fire", hp: 85, maxHp: 85, maxAttack: 26, minAttack: 23, defense: 8, pokedexNumber: 78},
        {name:"Arcanine", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif',
          type:"Fire", hp: 100, maxHp: 100, maxAttack: 30, minAttack: 20, defense: 12, pokedexNumber: 59}
      ]
    });
    addObject(Users, {
      user: "Giovanni",
      gymLeader: true,
      achievements: {title: "The Godfather", description: "Defeated Giovanni", reward: "Earth Badge"},
      picture: 'http://img1.ak.crunchyroll.com/i/spire1/650f8c892b803710be54ef14a594950e1379702685_large.png',
      activePokemon: [
        {name:"Rhyhorn", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif',
          type:"Ground", hp: 80, maxHp: 80, maxAttack: 18, minAttack: 15, defense: 8, pokedexNumber: 111},
        {name:"Dugtrio", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif',
          type:"Ground", hp: 80, maxHp: 80, maxAttack: 18, minAttack: 14, defense: 10, pokedexNumber: 51},
        {name:"Nidoqueen", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif',
          type:"Poison", hp: 105, maxHp: 105, maxAttack: 30, minAttack: 25, defense: 17, pokedexNumber: 31},
        {name:"Nidoking", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif',
          type:"Poison", hp: 105, maxHp: 105, maxAttack: 33, minAttack: 28, defense: 13, pokedexNumber: 34},
        {name:"Rhydon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif',
          type:"Ground", hp: 115, maxHp: 115, maxAttack: 28, minAttack: 25, defense: 13, pokedexNumber: 112}  

      ]
    });
    addObject(Users, {
      user: "Lorelei",
      gymLeader: true,
      achievements: {title: "Ice Ice Baby", description: "Defeated Lorelei", reward: "Super Potion"},
      picture: 'http://img1.wikia.nocookie.net/__cb20120215235202/pokemon/images/2/26/Lorelei_in_the_anime.jpg',
      activePokemon: [
        {name:"Dewgong", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif',
          type:"Ice", hp: 95, maxHp: 95, maxAttack: 30, minAttack: 20, defense: 12, pokedexNumber: 87},
        {name:"Cloyster", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif',
          type:"Ice", hp: 90, maxHp: 90, maxAttack: 23, minAttack: 20, defense: 19, pokedexNumber: 91},
        {name:"Slowbro", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif',
          type:"Water", hp: 75, maxHp: 75, maxAttack: 22, minAttack: 20, defense: 14, pokedexNumber: 80},
        {name:"Jynx", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif',
          type:"Ice", hp: 80, maxHp: 80, maxAttack: 23, minAttack: 20, defense: 7, pokedexNumber: 124},
        {name:"Lapras", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif',
          type:"Ice", hp: 95, maxHp: 95, maxAttack: 29, minAttack: 18, defense: 16, pokedexNumber: 131}  
      ]
    });
    addObject(Users, {
      user: "Bruno",
      gymLeader: true,
      achievements: {title: "The Gun Show", description: "Defeated Bruno", reward: "Super Potion"},
      picture: 'http://pldh.net/media/gyms_elites/ban_bruno.png',
      activePokemon: [
        {name:"Onix", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
          type:"Rock", hp: 90, maxHp: 90, maxAttack: 22, minAttack: 20, defense: 18, pokedexNumber: 95},
        {name:"Hitmonchan", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif',
          type:"Fighting", hp: 95, maxHp: 95, maxAttack: 30, minAttack: 25, defense: 8, pokedexNumber: 107},
        {name:"Hitmonlee", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif',
          type:"Fighting", hp: 95, maxHp: 95, maxAttack: 25, minAttack: 20, defense: 13, pokedexNumber: 106},
        {name:"Onix", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
          type:"Rock", hp: 90, maxHp: 90, maxAttack: 22, minAttack: 20, defense: 18, pokedexNumber: 95},
        {name:"Machamp", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif',
          type:"Fighting", hp: 100, maxHp: 100, maxAttack: 38, minAttack: 34, defense: 12, pokedexNumber: 68}  
      ]
    });
    addObject(Users, {
      user: "Agatha",
      gymLeader: true,
      achievements: {title: "I See Dead People", description: "Defeated Agatha", reward: "Super Potion"},
      picture: 'http://static.giantbomb.com/uploads/square_small/9/95666/1618010-agatha_pok_mon_leafgreen_firered.png',
      activePokemon: [
        {name:"Gengar", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
          type:"Ghost", hp: 85, maxHp: 85, maxAttack: 18, minAttack: 15, defense: 23, pokedexNumber: 94},
        {name:"Golbat", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
          type:"Poison", hp: 70, maxHp: 70, maxAttack: 25, minAttack: 18, defense: 12, pokedexNumber: 42},
        {name:"Haunter", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif',
          type:"Ghost", hp: 60, maxHp: 60, maxAttack: 15, minAttack: 12, defense: 17, pokedexNumber: 93},
        {name:"Arbok", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif',
          type:"Poison", hp: 80, maxHp: 80, maxAttack: 22, minAttack: 18, defense: 10, pokedexNumber: 24},
        {name:"Gengar", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',
          type:"Ghost", hp: 85, maxHp: 85, maxAttack: 22, minAttack: 15, defense: 23, pokedexNumber: 94}  
      ]
    });
    addObject(Users, {
      user: "Lance",
      gymLeader: true,
      achievements: {title: "The Desolation of Smaug", description: "Defeated Lance", reward: "Hyper Potion"},
      picture: 'http://pldh.net/media/gyms_elites/ban_lance.png',
      activePokemon: [
        {name:"Gyarados", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
          type:"Water", hp: 115, maxHp: 115, maxAttack: 35, minAttack: 25, defense: 14, pokedexNumber: 130},
        {name:"Dragonair", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
          type:"Dragon", hp: 80, maxHp: 80, maxAttack: 19, minAttack: 16, defense: 10, pokedexNumber: 148},
        {name:"Dragonair", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
          type:"Dragon", hp: 80, maxHp: 80, maxAttack: 19, minAttack: 16, defense: 10, pokedexNumber: 148},
        {name:"Aerodactyl", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif',
          type:"Rock", hp: 120, maxHp: 120, maxAttack: 35, minAttack: 30, defense: 16, pokedexNumber: 142},
        {name:"Dragonite", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
          type:"Dragon", hp: 140, maxHp: 140, maxAttack: 38, minAttack: 35, defense: 18, pokedexNumber: 149}  

      ]
    });
    addObject(Users, {
      user: "Blue",
      gymLeader: true,
      achievements: {title: "Pokemon Champion", description: "Defeated Blue", reward: "Master Ball"},
      picture: 'http://pldh.net/media/gyms_elites/ban_blue.png',
      activePokemon: [
        {name:"Pidgeot", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
          type:"Flying", hp: 90, maxHp: 90, maxAttack: 25, minAttack: 18, defense: 10, pokedexNumber: 18},
        {name:"Alakazam", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
          type:"Psychic", hp: 90, maxHp: 90, maxAttack: 37, minAttack: 30, defense: 8, pokedexNumber: 65},
        {name:"Rhydon", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif',
          type:"Ground", hp: 115, maxHp: 115, maxAttack: 28, minAttack: 25, defense: 13, pokedexNumber: 112},
        {name:"Exeggutor", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif',
          type:"Grass", hp: 90, maxHp: 90, maxAttack: 21, minAttack: 19, defense: 15, pokedexNumber: 103},
        {name:"Gyarados", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif',
          type:"Water", hp: 115, maxHp: 115, maxAttack: 35, minAttack: 25, defense: 14, pokedexNumber: 130},  
        {name:"Charizard", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
          type:"Fire", hp: 120, maxHp: 120, maxAttack: 37, minAttack: 30, defense: 12, pokedexNumber: 6}
      ]
    });

    addObject(Users, {
      user: "Red",
      picture: 'https://toomuchgaming.files.wordpress.com/2011/03/pkmn-trainer-red.jpg',
      achievements: {title: "Pokemon Master", description: "Defeated Red", reward: "Mewtwo"},
      gymLeader: true,
      activePokemon: [
        {name:"Charizard", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
          type:"Fire", hp: 120, maxHp: 120, maxAttack: 40, minAttack: 35, defense: 12, pokedexNumber: 6},
        {name:"Venusaur", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif',
          type:"Grass", hp: 125, maxHp: 125, maxAttack: 35, minAttack: 25, defense: 17, pokedexNumber: 3},
        {name:"Blastoise", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
          type:"Water", hp: 120, maxHp: 120, maxAttack: 30, minAttack:28, defense: 25, pokedexNumber: 9},
        {name:"Snorlax", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',
          type: "Normal", hp: 140, maxHp: 140, maxAttack: 30, minAttack: 25, defense: 25, pokedexNumber: 143},
        {name:"Pikachu", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
          type:"Electric", hp: 100, maxHp: 100, maxAttack: 38, minAttack: 37, defense: 7, pokedexNumber: 25},  
        {name:"Mew", avatarUrl: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
          type: "Psychic", hp: 90, maxHp: 90, maxAttack: 45, minAttack: 30, defense: 12, pokedexNumber: 151}    
      ]
    }); 
  });
  setTimeout(function(){ db.close(); }, 3000);
});
