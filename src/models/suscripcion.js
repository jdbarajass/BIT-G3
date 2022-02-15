var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Suscripcion = new Schema({
  correo: String,
  
});

module.exports = mongoose.model("Suscripcion", Suscripcion);