
log = console.log;

should = require('chai').should();
_     = require('lodash');

const { expect } = require('chai');
const {
      getPerson,
      Person
     } = require('./index');

    //  basic code verify that testing boilerplate is working
describe('#basic unit testing', ()=>{
    // unit tests goes in here 
    it('true should be true', ()=> {
        true.should.be.true;        
    });

    it('expect true to be true', () => {
        expect(true).to.be.true;
    })
});


describe('#index initial conditions ', () =>{
    it('initial person is an object', () =>{
        const person = getPerson();
        _.isObject(person).should.be.true;
    });
    it.only('armorBonus by default is 0 wearing leather armor ', ()=>{
        const person = getPerson();
        person.armorBonus.should.equal(0);
        // FIXME: should be 2 by default using leatherArmor
        // fix is to not reset armorBonus to 0
    } );
});

describe('#Person', () => {
  describe('#rollDice', () => {
    it('should return a finite number (not NaN nor Infinity) ', () =>{
      log('Person:', Person.rollDice  , () => {
          const number = Person.rollDice(1,20);
          _isFinite(number).should.be.true;
          log("number:" , number);
      });
    });
    it.only('should not have 0 in a 1000 size samples',()=>{
        const samples=new Array(1000);
        _.fill(samples, 0 );
        const rollDiceSamples =_.map(samples, item => Person.rollDice(1,20));
        const anyZeros = _.filter(rollDiceSamples, item => item ===0 );
        log(' zeros samples', anyZeros );
        anyZeros.length.should.equal(0);      
    });
  });
});






