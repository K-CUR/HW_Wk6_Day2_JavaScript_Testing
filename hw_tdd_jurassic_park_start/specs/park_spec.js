const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Ceratosaurus', 'carnivore', 40);
    dinosaur3 = new Dinosaur('Apatosaurus', 'herbivore', 45);
    dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 45);
    park = new Park('Jurassic Park', 40.00, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 40.00);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = park.collectionOfDinosaurs[3];
    assert.deepStrictEqual(actual, dinosaur4)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaursOfSpecies(dinosaur.species);
    assert.strictEqual(actual, )

  });

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
