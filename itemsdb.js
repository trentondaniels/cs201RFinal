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
  myDB.dropCollection("Items");
  myDB.createCollection("Items", function(err, Items){
    addObject(Items, {
      name: 'Pokeball',
      type: 'pokeball',
      affect: 15,
      price: 100,
      quantity: 1,
      description: "You can use this to catch pokemon",
      icon: null
    });    
    addObject(Items, {
      name: 'Great Ball',
      type: 'pokeball',
      affect: 30,
      price: 200,
      quantity: 1,
      description: "Increase your odds of catching a pokemon with this more advanced pokeball",
      icon: null
    });  
    addObject(Items, {
      name: 'Ultra Ball',
      type: 'pokeball',
      affect: 60,
      price: 300,
      quantity: 1,
      description: "The most advanced pokeball on the market, with this catching pokemon will be a breeze.",
      icon: null
    });
    addObject(Items, {
      name: 'Master Ball',
      type: 'pokeball',
      affect: 100000,
      price: null,
      quantity: 1,
      description: "A prototype pokeball that will never fail.  Use it wisely",
      icon: null
    });
    addObject(Items, {
      name: 'Potion',
      type: 'potion',
      affect: 20,
      price: 50,
      quantity: 1,
      description: "This will restore 20 HP to your injured pokemon",
      icon: null
    }); 
    addObject(Items, {
      name: 'Super Potion',
      type: 'potion',
      affect: 50,
      price: 100,
      quantity: 1,
      description: "This will restore 50 HP to your injured pokemon",
      icon: null
    }); 
    addObject(Items, {
      name: 'Hyper Potion',
      type: 'potion',
      affect: 100,
      price: 150,
      quantity: 1,
      description: "This will restore 100 HP to your injured pokemon",
      icon: null
    });
    addObject(Items, {
      name: 'Fire Stone',
      type: 'stone',
      affect: null,
      price: 1500,
      quantity: 1,
      description: "This stone can be used to evolve certain pokemon",
      icon: null
    });
    addObject(Items, {
      name: 'Water Stone',
      type: 'stone',
      price: 1500,
      affect: null,
      quantity: 1,
      description: "This stone can be used to evolve certain pokemon",
      icon: null
    });
    addObject(Items, {
      name: 'Leaf Stone',
      type: 'stone',
      price: 1500,
      affect: null,
      quantity: 1,
      description: "This stone can be used to evolve certain pokemon",
      icon: null
    });
    addObject(Items, {
      name: 'Lightning Stone',
      type: 'stone',
      price: 1500,
      affect: null,
      quantity: 1,
      description: "This stone can be used to evolve certain pokemon",
      icon: null
    });
    addObject(Items, {
      name: 'Moon Stone',
      type: 'stone',
      price: 2000,
      affect: null,
      quantity: 1,
      description: "This stone can be used to evolve certain pokemon",
      icon: null
    });
  });
  setTimeout(function(){ db.close(); }, 3000);
});

