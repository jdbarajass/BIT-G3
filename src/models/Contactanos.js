var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Contactanos = new Schema({
  nombre: String,
  email: String,
  numero: Number,
  dejanostumensaje:String
});

module.exports = mongoose.model("Contactanos", Contactanos);