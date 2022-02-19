var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bienvenido = new Schema({
  depositos: Number,
  retiros: Number,
  cambios: Number,
  balance: Number,
  bienvenido: String,
});

module.exports = mongoose.model("bienvenido", bienvenido);
