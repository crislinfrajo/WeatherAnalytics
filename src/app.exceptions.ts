export class AppException implements Error {

  name: string = 'ApplicationError';

  constructor( public message: string ) {
    console.error( this.name, message );
  }
  
}

export class EstimateException extends AppException {

  name: string = 'EstimateError';

  constructor( public message: string ) {
    super( message );
  }
  
}

