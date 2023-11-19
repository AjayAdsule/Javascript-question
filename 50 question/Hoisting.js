// guess the output and explain

var x = 10;
function foo() {
    console.log(x);
    var x = 20;
}
foo();

// a ,b ,c is not initialize it will give error
// console.log(a);
// let a = 15;

// console.log(b);
// let b = 25;

// console.log(c);
// const c = 35;

// console.log(e);
// const e = [1, 2, 3];

// it will give a function definition because Global Execution concept store whole function
console.log(f);
function f() {
  return 'Hello!';
}

// it will give undefined because the function is assign in variable
// console.log(g);
// var g = function() {
//   return 'Hi!';
// };


// h is not Initialize so it will throw and error
console.log(h);
let h;
console.log(h);
h = 50;
console.log(h);