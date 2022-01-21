class Animal {
  makeSound() {}
}

class Dog extends Animal {
  makeSound() {
    console.log('woff woff');
  }
}

class Cow extends Animal {
  makeSound() {
    console.log('mooooo');
  }
}

module.exports = {
  makeAnimalSound: (animalName) => {
    let animal = null;

    switch (animalName) {
      case 'dog':
        animal = new Dog();
        break;
      case 'cow':
        animal = new Cow();
        break;
      default:
        console.log("I don't know that animal!");
        return;
    }

    animal.makeSound();
  },
};
