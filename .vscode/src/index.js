let express=require("express");
let bodyParser=require("body-parser");
let mongoose=require("mongoose");

let app=express();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://YasnoviG:13898271Sa.@cluster0.wnqnl.mongodb.net/Repaso?retryWrites=true&w=majority")
.then(function(db){console.log("Estamos conectados")})
.catch(function(err){console.log(err)});