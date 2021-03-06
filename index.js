var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/imagenes"));
app.use(express.static(__dirname + "/JavaScrip"));
app.use(express.static(__dirname + "/calculadora.js"));
app.use(express.static(__dirname + "/src/pages"));
app.use(express.static("/calculadora.js"));
var path = __dirname + "/src/views";
app.set("views", path);
app.set("view engine", "ejs");
mongoose
  .connect(
    "mongodb+srv://YasnoviG:13898271Sa.@cluster0.wnqnl.mongodb.net/suscripcion?retryWrites=true&w=majority"
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
var Billetera = require("./src/models/billeteraSchema");
app.get("/borrar", function (req, res) {
  console.log("Hola, ingresaste a localhost:3000/Inicio");
  res.sendFile(__dirname + "/prueba.html");
});
app.get("/monedero", function (req, res) {
  res.sendFile(__dirname + "/src/pages/monedero.html");
});
app.get("/bitg3", function (req, res) {
  res.sendFile(__dirname + "/src/pages/bitg3.html");
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
  res.redirect("/inicarSesion");
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
    monto: 10000000,
  });
});
app.get("/referidos", async function (req, res) {
  res.render("referidos");
});
app.get("/preguntasFrecuentes", async function (req, res) {
  res.render("preguntasFrecuentes");
});

//Eliminar
app.get("/eliminar/:id", async function (req, res) {
  var id = req.params.id;

  await Registro.findByIdAndRemove(id);

  res.redirect("/billetera");
});

//Nuevo Deposito
app.get("/deposito/:id", function (req, res) {
  var id = req.params.id;
  res.render("deposito", {
    nuevo: true,
    usuarioId: id,
  });
});

app.post("/nuevodeposito", async function (req, res) {
  var datos = req.body;
  var nuevoDeposito = new Billetera(datos);
  await nuevoDeposito.save();
  res.redirect("/billetera");
});

//Ver detalle
app.get("/resumenDeposito/:id", async function (req, res) {
  var id = req.params.id;
  var depositosUsu = await Billetera.findOne({ id });
  res.render("resumendeposito", {
    res: depositosUsu,
  });
});

//Modificar
app.get("/modificar/:id", async function (req, res) {
  var id = req.params.id;
  console.log("Lo que tiene el id", id);
  var modificarMonto = await Billetera.findById(id);
  console.log("Lo que tiene la variable modificar monto", modificarMonto);
  res.render("billetera", {
    nuevo: false,
    res: modificarMonto,
  });
});

app.post("/modificar", async function (req, res) {
  var datos = req.body;
  await Registro.updateOne({ _id: req.body.id }, datos);
  res.redirect("/billetera");
});

// app.set("port", process.env.PORT || 3000);
// app.listen("port"),
//   () => {
//     console.log();
//   };
//app.listen("port");
app.listen(3000);
console.log("Servidor iniciado en el puerto 3000");
