import { increaseHTTPRequestsCounter, HTTPRequestsCounter  } from '../src/miscellaneous';
import { expect } from 'chai';
import 'mocha';

describe( 'Miscellaneous tests',
  () => {
    
    
    it( 'increaseHTTPRequestsCounter increase number and should return a number', () => {
      let currCounter = increaseHTTPRequestsCounter();
      expect( currCounter ).to.be.a( 'number' );
      expect( currCounter - 1 ).to.be.eq( 0 );
    } );

    it( 'HTTPRequestsCounter should be a Number', () => {
      expect(HTTPRequestsCounter ).to.be.a( 'number' );
    } );
  } );