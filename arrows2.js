const person1 = {
  name: "Mario",
  speak: function() {
    console.log(`My name is ${this.name}`);
  }
};

const person2 = {
  name: "Mariarosa",
  speak: () => console.log(`My name is ${this.name}`)
};

person1.speak();
person2.speak();
