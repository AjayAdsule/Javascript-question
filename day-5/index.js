//write a javascript code that return string first 3 character and last three character

const char=(str)=>{
//    return str.length<3 ? str:str.slice(0,3)+str.slice(-3)
return str.slice(0,3)+str.slice(-3) // i am using slice method from 0 to 3 index and then plus last three index we got last three index from (-)
}
console.log(char("javascript")) //javipt
console.log(char("blockchain")) //bloain

// write a function that extract the first half of a string of even length
// Notes
//We got even number by divide by 2
//so i pass the start index of string and divide last index of string by 2
const FirstHalf=(str)=> str.slice(0,str.length/2)

console.log(FirstHalf("blockchain")) //block
console.log(FirstHalf("Fullstack")) //Full

// 3} write a javascript function that concatenate  two string except their first character
// we want two string then we slice string from 1 index for both string
const ConCat=(str1,str2)=>{
    return str1.slice(1)+str2.slice(1)
}
console.log(ConCat("Ajay","Adsule"))

//Exercise 4
// given two value write a javascript program  to find out which one is nearest to 100

const Nearest100=(val1,val2)=>  (100-val1) <(100-val2) ? val1 : val2
console.log(Nearest100(45,52))

// write a javascript function that return even numbers

const even=(arr)=>{
    return arr.filter((num)=> num%2==0) //with the help of filter you can filter the number from array with your given match
}
console.log(even([12,41,47,52,4,2]))

// write a javascript promise fuction that check student marks if marks is grater than 50 should be print you are pass

const promise=new Promise((resolve,reject)=>{
    let Marks=prompt("enter your marks")
    Marks=Number(Marks)
    if(Marks>=50){
        resolve("you are pass")
    }
    else{
        reject(new Error("you are fail"))
    }
})
promise.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})