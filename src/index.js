var app = document.getElementById('app');
var mensajes = require ("./mensajes/mensajes");

app.innerHTML = "<p>" + mensajes.saludo + " " + mensajes.lugar + "</p>";
