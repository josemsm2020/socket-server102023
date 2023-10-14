import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';

//import { SERVER_PORT } from "./global/environment";

const server = new Server();

//BodyParser
//IMPORTANTE: bodyParser ser tiene que configurar antes de 
//la configuración porque aquí ya lo vamos a estar usando 
//server.app.use() esto es un middleware
//Con las siguientes dos líneas lo que estamos diciendo es que 
//lo que sea que me posteen tomalo y genera un objeto de javascript
server.app.use( bodyParser.urlencoded({ extended: true }) );
//Pasar la petición a un formato json (es otra configuración)
//Esto quiere decir que lo que sea que me posteen, tomalo y genera 
//un objeto de javascript
server.app.use( bodyParser.json() );

//CORS se tiene que configurar antes de la configuración 
//de las rutas porque aquí ya lo vamos a estar usando.
//Esta configuración hace que cualquier persona pueda 
//llamar a nuestros servicios (rutas)
server.app.use( cors({ origin:true, credentials: true }) );

//Rutas de servicios
server.app.use('/', router);

server.start( () => { 
    //console.log(`Servidor corriendo en el puerto ${ SERVER_PORT} `); 
    console.log(`Servidor corriendo en el puerto ${ server.port } `); 
});


//Esto se utilizo zl principio para ver que se ejecutaba la aplicación
// const nombre = 'Fernando';
// console.log(`Mi nombre es ${ nombre }`);