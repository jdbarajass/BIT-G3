var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Billetera = new Schema({
  monto: String,
  saldo: String,
  banco: String,
});

module.exports = mongoose.model("Billetera", Billetera);
