import { EstimateException } from './app.exceptions';
import { Logger } from './logger';


export class WeatherEstimateClass {

  private logger: Logger;

  constructor( logger: Logger ) {
    this.logger = logger;
  }

  estimate( city: string, countryCode: string, date: string ) {
    return new Promise( ( resolve, reject ) => {
      try {
        if ( !city ) throw new EstimateException( 'Missing city name' );
        if ( !countryCode ) throw new EstimateException( 'Missing country code' );
        if ( !date ) throw new EstimateException( 'Missing date' );

        var result = `Weather estimate for ${ city }, ${ countryCode } in ${ date } is: .....`;
        this.logger.info( 'Weather estimate with result', result );
        resolve( result );
      } catch ( error ) {
        reject( error )
      }
    } );
  }
}