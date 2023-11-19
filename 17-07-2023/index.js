{
  //Given an object person with properties name and age, use object destructuring to assign the values of name and age to variables personName and personAge.

  const person = {
    name: "John",
    age: 22,
  };
  const personName = person.name;
  const personAge = person.age;
  // i am doing small experiment on personAge variable
  console.log(
    `the person name is ${personName} and age is ${
      personAge > 20 ? "valid" : "Invalid"
    }`
  );
}

{
  //Given an object student with properties name, age, and grade, use object destructuring to extract the name and grade properties into separate variables.

  const student = {
    name: "Alice",
    age: 22,
    grade: "A+",
  };
  const { name, grade } = student;
  console.log(grade);
}

const studentObj = [
  {
    name: "ajay",
    age: 22,
    grade: "A+",
  },
  {
    name: "Dinesh",
    age: 25,
    grade: "B+",
  },
  {
    name: "Di",
    age: 25,
    grade: "C+",
  },
];

{
  let student = {
    FirstName: "John",
    LastName: "Doe",
    Age: 34,
  };

  const { FirstName: Name, LastName, Age: currentAge } = student;
  console.log(Name,LastName,currentAge);
 
}
{
    // array destructure

    const arr=[1,2,3]
    let [x,y,z]=arr
    console.log(y);
}