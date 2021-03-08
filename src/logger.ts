import { configure, getLogger } from 'log4js';

export class Logger {

  private parent: any;
  private logger: any;

  constructor( parent: any ) {
    this.parent = parent;
    this.logger = getLogger();
    this.logger.level = "debug";
    this.logger.debug("Logger initiated!");
  }

  trace( ...args ) {
    this.logger.log( args );
  }
  
  error( ...args ) {
    this.logger.error( args );
  }

}