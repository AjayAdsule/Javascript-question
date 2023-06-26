//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//Output: [10,11,12] n = 10 

const counter=(n)=>{
    return n=[n,n+1,n+2]
}
console.log(counter(10));
console.log(counter(11));

//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const counters=(int)=>{
    return obj={
        increment:()=>{
            int++
            console.log(`increment is ${int}`);
        },
        decrement:()=>{
            int--
            console.log(`decrement is ${int}`);
        },
        reset:()=>{
            int=int+1;
            console.log(`reset ${int}`);
        }
    }
}
const c=counters(4);
c.increment()
c.decrement()
c.reset()
//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

let arr=[1,2,3]
let result=arr.map((val)=>{
    return val+1
})
console.log(result);

