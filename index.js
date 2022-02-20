var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/imagenes"));
app.use(express.static(__dirname + "/JavaScrip"));
app.use(express.static(__dirname + "/calculadora.js"));
app.use(express.static("/calculadora.js"));
var path = __dirname + "/src/views";
app.set("views", path);
app.set("view engine", "ejs");
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
var suscripcion = require("./src/models/suscripcion");
var Contactanos = require("./src/models/Contactanos");
var bienvenido = require("./src/models/bienvenido");
app.get("/borrar", function (req, res) {
  console.log("Hola, ingresaste a localhost:3000/Inicio");
  res.sendFile(__dirname + "/prueba.html");
});
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

app.post("/Contactanos", async function (req, res) {
  var datosContactanos = req.body;
  var nuevoContacto = new Contactanos(datosContactanos);
  await nuevoContacto.save();
  res.redirect("/inicio");
});
app.post("/loginUsuario", async function (req, res) {
  var correoLogin = req.body.correo;
  var correosRegistrados = await Registro.find({ correo: correoLogin }).limit(
    1
  );

  if (correosRegistrados.length == 0) {
    console.log("no estas registrado");
    res.sendFile(__dirname + "/src/pages/Registro.html");
  } else {
    console.log("si estas registrado");
    res.render("loginUsuario", {
      usuarioBitg3: correosRegistrados,
    });
  }
});

app.get("/inicioBilletera", async function (req, res) {
  var listado = await Registro.find().sort({ nombreUsuario: 1 });

  res.render("inicioBilletera", {
    usuarioBitg3: listado,
  });
});

app.get("/calculadora", async function (req, res) {
  res.render("calculadora");
});
app.get("/billetera", async function (req, res) {
  var listado = await Registro.find().sort({ nombreUsuario: 1 });
  res.render("billetera", {
    usuarioBitg3: listado,
  });
});
app.get("/referidos", async function (req, res) {
  res.render("referidos");
});
app.get("/preguntasFrecuentes", async function (req, res) {
  res.render("preguntasFrecuentes");
});

app.post("/modificar", async function (req, res) {
  var datos = req.body;

  await Registro.updateOne({ _id: req.body.id }, datos);

  res.redirect("/inicioBilletera");
});

//Eliminar
app.get("/eliminar/:id", async function (req, res) {
  var id = req.params.id;

  await Registro.findByIdAndRemove(id);

  res.redirect("/billetera");
});

//Nuevo Deposito
app.get("/deposito", function (req, res) {
  res.render("deposito", {
    nuevo: true,
  });
});

app.post("/nuevodeposito", async function (req, res) {
  var datos = req.body;

  var nuevoDeposito = new billeteraSchema(datos);
  await nuevoDeposito.save();

  res.redirect("/billetera");
});

app.listen(3000);
console.log("Servidor iniciado en el puerto 3000");
