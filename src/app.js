var app = document.getElementById('app');
import mensajes from "./components/mensajes/mensajes";
import css from "./stylesheets/main.scss";
import txt from "./contents/menssage.pug";


app.innerHTML = "<p>" + mensajes.saludo + " " + mensajes.lugar + "</p>" + txt;
