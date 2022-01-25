function ingresar() {
  //console.log("ingresado");
  function persona(usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
  var usuarioIngresar = document.getElementById("usuario").value;
  //console.log(usuarioIngresar);
  var contraseñaIngresar = document.getElementById("contraseña").value;
  //console.log(contraseñaIngresar);

  nuevoSujeto = new persona(usuarioIngresar, contraseñaIngresar);
  console.log(nuevoSujeto);
  agregar();
}
var baseDatos = [];
function agregar() {
  baseDatos.push(nuevoSujeto);
  console.log(baseDatos);
}
