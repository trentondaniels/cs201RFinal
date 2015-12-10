var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  name: String,
  type: String,
  affect: Number,
  price: Number,
  description: String,
  quantity: Number,
  icon: String
});
mongoose.model('Item', ItemSchema, 'Items');
