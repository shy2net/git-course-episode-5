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

class Monster extends Animal {
  makeSound() {
    console.log('boooo!!');
  }
}

class SlenderMan extends Animal {
  makeSound() {
    console.log('hihihihihi!!');
  }
}

class Frog extends Animal {
  makeSound() {
    console.log('oh ah oh ah');
  }
}

class Cricket extends Animal {
  makeSound() {
    console.log('zzzz_zzzzz_zzzzz');
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
      case 'monster':
        animal = new Monster();
        break;
      case 'cricket':
        animal = new Cricket();
        break;
      case 'slender-man':
        animal = new SlenderMan();
        break;
      case 'frog':
        animal = new Frog();
        break;
      default:
        console.log("I don't know that animal!");
        return;
    }

    animal.makeSound();
  },
};
