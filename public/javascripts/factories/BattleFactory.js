pokeApp.factory('BattleFactory', function(){
  return {
    typeBonus: function(attacker, defender, min, max, defense){
      var evaluate = attacker + " " + defender;
      var bonus = null;
      switch (evaluate) {
        case "Fire Fire":
          bonus = .5;
          break;
        case "Fire Water":
          bonus = .5;
          break;
        case "Fire Grass":
          bonus = 2;
          break;
        case "Fire Ice":
          bonus = 2;
          break;
        case "Fire Bug":
          bonus = 2;
          break;
        case "Fire Rock":
          bonus = .5;
          break;
        case "Fire Dragon":
          bonus = .5;
          break;

        case "Normal Rock":
          bonus = .5;
          break;
        case "Normal Ghost":
          bonus = 0;
          break;

        case "Water Fire":
          bonus = 2;
          break;
        case "Water Water":
          bonus = .5;
          break;
        case "Water Grass":
          bonus = .5;
          break;
        case "Water Gound":
          bonus = 2;
          break;
        case "Water Rock":
          bonus = 2;
          break;
        case "Water Dragon":
          bonus = .5;
          break;

        case "Electric Water":
          bonus = 2;
          break;
        case "Electric Electric":
          bonus = .5;
          break;
        case "Electric Grass":
          bonus = .5;
          break;
        case "Electric Gound":
          bonus = 0;
          break;
        case "Electric Flying":
          bonus = 2;
          break;
        case "Electric Dragon":
          bonus = .5;
          break;

        case "Grass Fire":
          bonus = .5;
          break;
        case "Grass Water":
          bonus = 2;
          break;
        case "Grass Grass":
          bonus = .5;
          break;
        case "Grass Poison":
          bonus = .5;
          break;
        case "Grass Ground":
          bonus = 2;
          break;
        case "Grass Flying":
          bonus = .5;
          break;
        case "Grass Bug":
          bonus = .5;
          break;
        case "Grass Rock":
          bonus = 2;
          break; 
        case "Grass Dragon":
          bonus = .5;
          break;

        case "Ice Water":
          bonus = .5;
          break;
        case "Ice Grass":
          bonus = 2;
          break;
        case "Ice Ice":
          bonus = .5;
          break;
        case "Ice Ground":
          bonus = 2;
          break;
        case "Ice Flying":
          bonus = 2;
          break;
        case "Ice Dragon":
          bonus = 2;
          break;

        case "Fighting Normal":
          bonus = 2;
          break; 
        case "Fighting Ice":
          bonus = 2;
          break;
        case "Fighting Poison":
          bonus = .5;
          break; 
        case "Fighting Flying":
          bonus = .5;
          break;
        case "Fighting Psychic":
          bonus = .5;
          break; 
        case "Fighting Bug":
          bonus = .5;
          break;
        case "Fighting Rock":
          bonus = 2;
          break; 
        case "Fighting Ghost":
          bonus = 0;
          break;

        case "Poison Grass":
          bonus = 2;
          break; 
        case "Poison Poison":
          bonus = .5;
          break;
        case "Poison Ground":
          bonus = .5;
          break; 
        case "Poison Bug":
          bonus = 2;
          break;
        case "Poison Rock":
          bonus = .5;
          break; 
        case "Poison Ghost":
          bonus = .5;
          break;

        case "Ground Fire":
          bonus = 2;
          break; 
        case "Ground Electric":
          bonus = 2;
          break;
        case "Ground Poison":
          bonus = 2;
          break; 
        case "Ground Flying":
          bonus = 0;
          break;
        case "Ground Bug":
          bonus = .5;
          break; 
        case "Ground Rock":
          bonus = 2;
          break;

        case "Flying Electric":
          bonus = .5;
          break; 
        case "Flying Grass":
          bonus = 2;
          break;
        case "Flying Fighting":
          bonus = 2;
          break; 
        case "Flying Bug":
          bonus = 2;
          break;
        case "Flying Rock":
          bonus = .5;
          break;

        case "Psychic Fighting":
          bonus = 2;
          break;
        case "Psychic Poison":
          bonus = 2;
          break;
        case "Psychic Psychic":
          bonus = .5;
          break;
        case "Psychic Fighting":
          bonus = 2;
          break;

        case "Bug Fire":
          bonus = .5;
          break;
        case "Bug Grass":
          bonus = 2;
          break;
        case "Bug Fighting":
          bonus = .5;
          break;
        case "Bug Poison":
          bonus = 2;
          break;
        case "Bug Flying":
          bonus = .5;
          break;
        case "Bug Psychic":
          bonus = 2;
          break;

        case "Rock Fire":
          bonus = 2;
          break;
        case "Rock Ice":
          bonus = 2;
          break;
        case "Rock Fighting":
          bonus = .5;
          break;
        case "Rock Ground":
          bonus = .5;
          break;
        case "Rock Flying":
          bonus = 2;
          break;
        case "Rock Bug":
          bonus = 2;
          break;

        case "Ghost Psychic":
          bonus = 2;
          break;
        case "Ghost Ghost":
          bonus = 2;
          break;
        case "Ghost Normal":
          bonus = .5;
          break;

        default:
          bonus = 1;
          break;                                                              
      }
      damage = bonus * (Math.floor(Math.random() * (min - max + 1)) + min) - defense
      if (bonus === 0) {
        damage = 0;
      }
      else if (damage < 0) {
        damage = 1;
      }
      return damage;
    }
  }
});
