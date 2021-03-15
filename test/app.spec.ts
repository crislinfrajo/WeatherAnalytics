import { rootMessage } from '../src/app';
import { expect } from 'chai';
import 'mocha';

describe( 'First test',
  () => {
    it( 'Should return a root ok message', () => {
      const rootMessageObject = rootMessage();
      expect( rootMessageObject.message ).to.equal( 'Ok' );
    } );
    it( 'Should return a root ok message', () => {
      const rootMessageObject = rootMessage();
      expect( rootMessageObject.message ).to.equal( 'Ok' );
    } );
  } );