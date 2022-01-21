const process = require('process');

const animals = require('./animal_sounds.js');

function main() {
  require('./graphics');
  console.log('-- This is the development version! --');

  const animalName = process.argv.at(2);
  animals.makeAnimalSound(animalName);
}

main();
