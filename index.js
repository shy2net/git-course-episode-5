const process = require('process');

const animals = require('./animal_sounds.js');

function printHelp() {
  console.log("HINT: Write an animal name to make it's sound! for example: dog");
}

function main() {
  console.log('Main code running here');
  console.log('-- This is a development version! --');

  // Print help if parameter not provided
  if (process.argv.length < 3) {
    printHelp();
    return;
  }

  const animalName = process.argv.at(2);
  animals.makeAnimalSound(animalName);
}

main();
