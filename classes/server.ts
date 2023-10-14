import express from 'express';
import { SERVER_PORT } from '../global/environment';

export default class Server {
    public app: express.Application; //Va a ser de tipo de la aplicación express
    public port: number;

    //constructor( port: number ){
    constructor(){
        this.app = express();
        //this.port = port;
        this.port = SERVER_PORT;
    }

    start( callback: Function ){
        this.app.listen( this.port, callback() );
    }
}