import { getLogger } from 'log4js';

export class Logger {

  private parent: any;
  private logger: any;

  constructor( parent: any ) {
    this.parent = parent;
    this.logger = getLogger();
    this.logger.level = "debug";
    this.logger.debug("Logger initiated!");
  }

  trace( ...args: any[] ) {
    this.logger.trace( args );
  }

  debug( ...args: any[] ) {
    this.logger.debug( args );
  }
  
  info( ...args: any[] ) {
    this.logger.info( args );
  }

  warn( ...args: any[] ) {
    this.logger.warn( args );
  }

  error( ...args: any[] ) {
    this.logger.error( args );
  }

}