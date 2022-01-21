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

class Duck extends Animal {
  makeSound() {
    console.log('quack quack');
  }
}

class Panda extends Animal {
  makeSound() {
    console.log('zZzZzZzZz');
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
      case 'duck':
        animal = new Duck();
        break;
      case 'panda':
        animal = new Panda();
        break;
      default:
        console.log("I don't know that animal!");
        return;
    }

    animal.makeSound();
  },
};
