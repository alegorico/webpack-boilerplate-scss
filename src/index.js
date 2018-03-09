var app = document.getElementById('app');
var mensajes = require ("./components/mensajes/mensajes");
var css = require("./stylesheets/main.scss");


app.innerHTML = "<p>" + mensajes.saludo + " " + mensajes.lugar + "</p>";
