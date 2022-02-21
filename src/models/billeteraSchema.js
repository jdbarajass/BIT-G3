var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Billetera = new Schema({
  usuarioId: String,
  monto: String,
  banco: String,
});

module.exports = mongoose.model("Billetera", Billetera);
