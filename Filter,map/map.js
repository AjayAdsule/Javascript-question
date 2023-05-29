//Double numbers: Write a function that takes an array of numbers as input and returns a new array with each number doubled.

const double = (...arr) => {
  const result = arr.map((num) => {
    return num * 2;
  });
  console.log(result);
};
double(1, 2, 3, 4, 5); //[2, 4, 6, 8, 10]
double(10, 40, 30); // [20, 80, 60]

//Capitalize strings: Write a function that takes an array of strings as input and returns a new array with each string capitalized.

const capitalize = (...arr) => {
  return arr.map((str) => {
    return str.toUpperCase();
  });
};
console.log(capitalize("ajay", "vijay")); //['AJAY', 'VIJAY']
console.log(capitalize("MAhesh", "diNesH")); //['MAHESH', 'DINESH']

//Calculate total prices: Given an array of objects representing products with properties like name and price, write a function that returns an array of the total prices for each product (name and price combined).

// create object 
const product = [
  {
    name: "apple",
    price: 100,
  },
  {
    name: "banana",
    price: 200,
  },
  {
    name: "orange",
    price: 300,
  },
];

//make a function
const productTotal = () => {
    const result= product.map((item)=>{
        return `${item.name}-${item.price}`
    })
    console.log(result);
}
productTotal() //['apple-100', 'banana-200', 'orange-300']

// Extract specific property: Given an array of objects representing books with properties like title, author, and genre, write a function that returns an array of all the book titles

const book=[
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  {
    title:"Wonder Womaniya",
    author:"y DR. SOHIL MAKWANA",
    genre:"Fantasy",
  },
 
]
const filterBook=()=>{
  const result=book.map((item)=>{
    return item.title
  })
  return console.log(result)
}

filterBook()