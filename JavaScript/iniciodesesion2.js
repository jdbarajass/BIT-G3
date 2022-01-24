function verificar(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value; 

    if(usuario == "bit01" && contraseña == "2022"){
        alert("bienvenido");
    }else{
        alert("datos incorrectos");
    }
   

}