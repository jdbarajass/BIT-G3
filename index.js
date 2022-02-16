var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("/styles"));
// app.use(express.static(__dirname + "/styles"));
// app.use(express.static("styles"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/imagenes"));
mongoose
  .connect(
    "mongodb+srv://jdbarajass:1234@cluster0.ukrek.mongodb.net/RegistroUsuBIT?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado a la BD");
  })
  .catch(function (err) {
    console.log(err);
  });

var Registro = require("./src/models/Registros");
const suscripcion = require("./src/models/suscripcion");

app.get("/inicio", function (req, res) {
  console.log("Hola, ingresaste a localhost:3000/Inicio");
  res.sendFile(__dirname + "/src/pages/index.html");
});

app.get("/inicarSesion", function (req, res) {
  console.log("Hola, ingresaste a localhost:3000/Inicio");
  res.sendFile(__dirname + "/src/pages/iniciodesesion1.html");
});

app.get("/Registro", function (req, res) {
  console.log("Hola, ingresaste a localhost:3000/Inicio");
  res.sendFile(__dirname + "/src/pages/Registro.html");
});

app.post("/registro", async function (req, res) {
  var datos = req.body;
  var nuevoRegistro = new Registro(datos);
  await nuevoRegistro.save();
  res.redirect("/inicio");
});

app.post("/suscripcion", async function (req, res) {
  var datosSuscripcion = req.body;
  var nuevoSuscriptor = new suscripcion(datosSuscripcion);
  await nuevoSuscriptor.save();
  res.redirect("/inicio");
});

app.post("/login", async function (req, res) {
  var correoLogin = req.body.correo;
  var correosRegistrados = await Registro.find({ correo: correoLogin }).limit(
    1
  );
  if (correosRegistrados.length == 0) {
    res.redirect("/Registro");
  } else {
    res.redirect("/Registro");
  }
  res.redirect("/inicio");
});

app.listen(3000);
console.log("Servidor iniciado en el puerto 3000");
