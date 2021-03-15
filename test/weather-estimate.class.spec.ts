import { rootMessage } from '../src/app';
import { expect } from 'chai';
import 'mocha';
import { WeatherEstimateClass } from '../src/weather-estimate.class';
import { Logger } from '../src/logger';

describe( 'Weather estimate tests',
  () => {

    it( 'Should create an estimate class instace', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      expect( weatherEstimate ).to.be.an.instanceOf( WeatherEstimateClass );
    } );
   

    it( 'Should return string with estimate', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      const result: string = weatherEstimate.estimate( 'London', 'UK', '2022-01-01' );
      expect( result ).to.be.a( 'string' );
    } );
   
  } );