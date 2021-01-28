
log = console.log;
expect = require('chai').expect;
should = require('chai').should();
_     = require('lodash');

describe('#basic unit testing', ()=>{
    // unit tests goes in here 
    it('true should be true', ()=> {
        true.should.be.true;        
    });

    it('expect true to be true', () => {
        expect(true).to.be.false;
    })

});