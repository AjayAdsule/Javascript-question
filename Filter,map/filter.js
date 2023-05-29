//Filter even numbers: Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

const findEvenNum=(...num)=>{
  let a=  num.filter((val)=> val%2==0)
    console.log(a)
}
findEvenNum(12,41,11,2,36,22,20)


// Filter strings by length: Write a function that takes an array of strings as input and returns a new array containing only the strings with a length greater than 5 characters.

const filterString=(...arr)=>{
    const result = arr.filter((str)=>{
        return str.length >=5
    })
    console.log(result)
}
filterString('ajay','vijay','dinesh','mahesh')

//Filter by property value: Given an array of objects representing students with properties like name and age, write a function that filters out students who are younger than 18 years old.

const student=[{
    name:'ajay',
    age:22
},{
    name:'vijay',
    age:18
},{
    name:'dinesh',
    age:21
},{
    name:'mahesh',
    age:15
}
]
const filterStudentAge=()=>{
    const result = student.filter((student)=>{
        return student.age !==18;
    })
    console.log(result)
}
filterStudentAge()

