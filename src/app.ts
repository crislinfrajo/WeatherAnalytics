import express from 'express';
import { Request, Response } from 'express';
import bodyParser from "body-parser";

const server = express();

const port = process.env.PORT || 4000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

export const rootMessage = () => {
  return {
    "message": "Ok"
  };
}

server.get('/', ( request: express.Request, response: express.Response ) => {
  response.status( 200 );
  response.json( rootMessage() );
} );

server.listen(port, () => {
  return console.log(`Server is listening on ${ port }`);
});