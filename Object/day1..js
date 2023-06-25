// Create an object called "person" with properties for "name", "age", and "occupation".

const person={
    name: "Jane",
    age: 25,
    occupation:"devloper",
    introduce:()=>{
        console.log(`my name is ${this.name} i am ${this.age} old and my occupation is ${this.occupation}`);
    }
    
}
console.log(person);
console.log(person.name);

// Add a method to the "person" object called "introduce" that returns a string introducing the person.
console.log(person.introduce());












// Create another object called "car" with properties for "make", "model", and "year".
// Add a method to the "car" object called "startEngine" that logs a message saying the engine has started.
// Create a function called "getKeys" that takes an object as an argument and returns an array of its keys.
// Create a function called "getValues" that takes an object as an argument and returns an array of its values.
// Create a function called "objectLength" that takes an object as an argument and returns the number of properties it has.
// Create a function called "mergeObjects" that takes two objects as arguments and returns a new object with the properties of both objects.
// Create a function called "hasProperty" that takes an object and a property name as arguments and returns true if the object has that property, and false otherwise.
// Create a function called "reverseObject" that takes an object as an argument and returns a new object with the keys and values reversed.