import { rootMessage } from '../src/app';
import { expect } from 'chai';
import 'mocha';
import { WeatherEstimateClass } from '../src/weather-estimate.class';
import { Logger } from '../src/logger';

describe( 'Logger tests',
  () => {
    it( 'Should create a logger instance and get the log level', () => {
      const logger = new Logger();
      const level: string = logger.getLevel();
      expect( level ).to.be.a( 'string' );
    } );

    it( 'Should log a trace message', () => {
      const logger = new Logger();
      const result = logger.trace( 'Trace log test' );
      expect( result ).to.be.eq( true );
    } );

    it( 'Should log a debug message', () => {
      const logger = new Logger();
      const result = logger.debug( 'Debug log test' );
      expect( result ).to.be.eq( true );
    } );

    it( 'Should log a info message', () => {
      const logger = new Logger();
      const result = logger.info( 'Info log test' );
      expect( result ).to.be.eq( true );
    } );
    it( 'Should log a warn message', () => {
      const logger = new Logger();
      const result = logger.warn( 'Warn log test' );
      expect( result ).to.be.eq( true );
    } );

    it( 'Should log a error message', () => {
      const logger = new Logger();
      const result = logger.error( 'Error log test' );
      expect( result ).to.be.eq( true );
    } );

    it( 'Should change the log level to info', () => {
      const logger = new Logger();
      logger.setLevel( 'info' );
      const level: string = logger.getLevel();
      expect( level ).to.be.a( 'string' );
      expect( level ).to.be.eq( 'info' );
    } );
   
  } );