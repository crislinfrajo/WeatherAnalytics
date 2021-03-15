import express from 'express';
import { Request, Response } from 'express';
import bodyParser from "body-parser";
import { WeatherEstimateClass } from './weather-estimate.class';
import { Logger } from './logger';

// Create Express HTTP Server.
const server = express();

// Create logger instance
let appLogger = new Logger();

// Servder port
const port = process.env.PORT || 4000;

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );

export const rootMessage = () => {
  return {
    "message": "Ok"
  };
}

server.get( '/', ( request: express.Request, response: express.Response ) => {
  response.status( 200 );
  response.json( rootMessage() );
} );

server.get( '/estimate', ( request: express.Request, response: express.Response ) => {
  const weatherEstimate = new WeatherEstimateClass( appLogger );
  const result: string = weatherEstimate.estimate( 'London', 'UK', '2022-01-01' );
  response.status( 200 );
  response.json( {
    "message": result
  } );
} );


server.listen( port, () => {
  return console.log( `Server is listening on ${ port }` );
} );