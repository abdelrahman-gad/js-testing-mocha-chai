
log = console.log;

should = require('chai').should();
_     = require('lodash');

const { expect } = require('chai');
const {
      getPerson,
      Person,
      Armor,
      Weapon
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
    it('armorBonus by default is 0 wearing leather armor ', ()=>{
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
    it('should not have 0 in a 1000 size samples',()=>{
        const samples=new Array(1000);
        _.fill(samples, 0 );
        const rollDiceSamples =_.map(samples, item => Person.rollDice(1,20));
        const anyZeros = _.filter(rollDiceSamples, item => item === 0 );
        log(' zeros samples', anyZeros );
        anyZeros.length.should.equal(0);      
    });
  });
 describe('#attack', () => {
     var personA;
     var personB;
     var createPerson= (name) => {
        var leatherArmor = new Armor("Leather", 2);
        var shortSword = new Weapon("Short Sword", 0, 1, 6)
        return new Person(name, 2, 4, 1, [leatherArmor, shortSword]);
     }
    beforeEach(()=>{
      personA = createPerson('Person A');
      personB = createPerson('Person B');

    });

    afterEach(()=>{
      personA=undefined;
      personB=undefined;
    });
    it('person A hitPoints starts at 11', () =>{
      personA.hitPoints.should.equal(11);
    });
    it('person B hitPoints starts at 11', () =>{
        personB.hitPoints.should.equal(11);
    });
    it("personA's armorBonus  is 0", () =>{
        personA.armorBonus.should.equal(0);
    });
    it("personB's armorBonus is  0", () =>{
        personB.armorBonus.should.equal(0);
    });

 });

});






