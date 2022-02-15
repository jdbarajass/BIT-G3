var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Registro = new Schema({
  nombreUsuario: String,
  apellido: String,
  telefono: String,
  fechaNacimiento: String,
  correo: String,
  contrasena: String,
  estado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Registros", Registro);
