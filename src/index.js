var app = document.getElementById('app');
var mensajes = require ("./components/mensajes/mensajes");

app.innerHTML = "<p>" + mensajes.saludo + " " + mensajes.lugar + "</p>";
