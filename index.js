const process = require('process');

const animals = require('./animal_sounds.js');

function main() {
  console.log('Main code running here');
  console.log('-- This is a development version! --');

  const animalName = process.argv.at(2);
  animals.makeAnimalSound(animalName);
}

main();
