import { getLogger } from 'log4js';

export class Logger {

  private logger: any;
  private _level: string = 'trace';

  constructor( level?: string ) {
    if ( level ) this._level = level;
    this.logger = getLogger();
    this.setLevel( this.getLevel() );
    this.logger.debug( "Logger initiated!" );
  }

  setLevel( level: string ): void {
    this._level = level;
    this.logger.level = this._level;
  }

  getLevel(): string {
    return this._level;
  }

  trace( ...args: any[] ): boolean {
    try {
      this.logger.trace( args );
      return true;
    } catch ( error ) {
      return false;
    }
  }

  debug( ...args: any[] ) {
    try {
      this.logger.debug( args );
      return true;
    } catch ( error ) {
      return false;
    }
  }

  info( ...args: any[] ) {
    try {
      this.logger.info( args );
      return true;
    } catch ( error ) {
      return false;
    }
  }

  warn( ...args: any[] ) {
    try {
      this.logger.warn( args );
      return true;
    } catch ( error ) {
      return false;
    }
  }

  error( ...args: any[] ) {
    try {
      this.logger.error( args );
      return true;
    } catch ( error ) {
      return false;
    }
  }

}