import { expect } from 'chai';
import 'mocha';
import { WeatherEstimateClass } from '../src/weather-estimate.class';
import { Logger } from '../src/logger';
import { EstimateException } from '../src/app.exceptions';


describe( 'Weather estimate tests',
  () => {

    it( 'Should create an estimate class instace', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      expect( weatherEstimate ).to.be.an.instanceOf( WeatherEstimateClass );
    } );

    it( 'Should return exception for missing city name', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      weatherEstimate.estimate( null, 'UK', '2022-01-01' ).then( ( result: string ) => {
        
      } ).catch( ( error: EstimateException ) => {
        expect( error ).to.be.a( 'string' );
      } );
    } );

    it( 'Should return exception for missing country code', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      weatherEstimate.estimate( 'London', null, '2022-01-01' ).then( ( result: string ) => {
        
      } ).catch( ( error: EstimateException ) => {
        expect( error ).to.be.a( 'string' );
      } );
    } );
    it( 'Should return exception for missing date', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      weatherEstimate.estimate( 'London', 'UK', null ).then( ( result: string ) => {
        
      } ).catch( ( error: EstimateException ) => {
        expect( error ).to.be.a( 'string' );
      } );
    } );

    it( 'Should return string with estimate', () => {
      const weatherEstimate = new WeatherEstimateClass( new Logger() );
      weatherEstimate.estimate( 'London', 'UK', '2022-01-01' ).then( ( result: string ) => {
        expect( result ).to.be.a( 'string' );
      } ).catch( ( error: EstimateException ) => {

      } );
    } );

  } );