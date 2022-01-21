const process = require('process');

const animals = require('./animal_sounds.js');

function printTime() {
  console.log('-- The time now is: ' + new Date().toTimeString() + '--');
}

function main() {
  console.log('Main code running here');
  printTime();
  console.log('-- This is a development version! --');

  const animalName = process.argv.at(2);
  animals.makeAnimalSound(animalName);
}

main();
