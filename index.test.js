
log = console.log;

should = require('chai').should();
_     = require('lodash');

const { expect } = require('chai');
const {
      alwaysTrue,
      legitString 
     } = require('./index');

describe('#basic unit testing', ()=>{
    // unit tests goes in here 
    it('true should be true', ()=> {
        true.should.be.true;        
    });

    it('expect true to be true', () => {
        expect(true).to.be.true;
    })
});


describe('#alwaystrue', () => {
   it('should always return true',()=>{
       alwaysTrue().should.be.true;
   });

   it('expected to always return true', () =>{
       expect(alwaysTrue()).to.be.true;
   });

   // negative test 
   it('should not be false', ()=>{
       alwaysTrue().should.not.be.false;
   });
});


describe('#legitString', () =>{
    it("should detect 'cow' as a legit string", ()=>{
       legitString('cow').should.be.true;
    });
    it('undefined should not be false', () => { // negative test
      legitString(undefined).should.be.false;
    });
});

