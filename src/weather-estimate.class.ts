import { Logger } from './logger';

export class WeatherEstimateClass {

  private logger: Logger;

  constructor( logger: Logger ) {
    this.logger = logger;
  }

  estimate( city: string, country: string, date: string ) {
    var result = `Weather estimate for ${city}, ${country} in ${date} is: .....`;
    this.logger.info( 'Weather estimate with result', result );
    return result;
  }
}