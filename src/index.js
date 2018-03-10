var app = document.getElementById('app');
import mensajes from "./components/mensajes/mensajes";
import css from "./stylesheets/main.scss";


app.innerHTML = "<p>" + mensajes.saludo + " " + mensajes.lugar + "</p>";
