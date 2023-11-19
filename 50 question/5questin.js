// Write a function that prints numbers from 1 to N. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

// break the question
// write a function that print from 1 to N

function numbers(n) {
  for (let i = 1; i <= n; i++) {
    if(i===3){
        console.log('fizz');
    }else if(i===5){
        console.log('bizz');
    }
    else{
        console.log(i);
    }
  }
}
numbers(10);
