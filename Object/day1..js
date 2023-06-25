// Create an object called "person" with properties for "name", "age", and "occupation".

const person = [
  {
    name: "Jane",
    age: 25,
    occupation: "devloper",
  },
  {
    name: "vijay",
    age: 19,
    occupation: "tester",
  },
  {
    name: "dinesh",
    age: 38,
    occupation: "software",
  },
];

let person2=person
person2[1].name='kartik'
console.log(person2);// if you change the person2[1] name the orignal copy of object also changed
console.log(person);

let newObj = person.filter((item)=>{
    return item['age']>30;
}).map((item)=> `my name is ${item.name} and my age is ${item.age}`)
console.log(newObj);

for (per in person) {
  console.log(
    `my name is ${person.name} and mu occupation is ${person.occupation}`
  );
}

