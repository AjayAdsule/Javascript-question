//Write a JavaScript function that takes a string as input and returns the length of the string.
//create a function in that pass a str variable parameter
const StringLength=(str)=>{  
    const result =str.length //method of finding string length
    console.log(result)
}
StringLength("ajay")

//Write a JavaScript function that takes two strings as input and concatenates them together.
// create a function in that i pass two parameter str1 and str2 
const ConCat=(str1,str2)=>{
    // const result= str1+str2 //you can use this method for string concat 
    const result =str1.concat(str2) //also you can use concat method for string concattion
    return result 
}
console.log(ConCat("ajay","Adsule"))

//Write a JavaScript function that takes a string as input and converts all the characters to uppercase.

const Upper=(str)=>{
    const result= str.toUpperCase() //touppercase is method to upper the case of words
    console.log(result)
}
Upper("ajay")

//Write a JavaScript function that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string.

//Write a JavaScript function that takes a string as input and checks if it contains only numeric characters.

const Numeric=(str)=>{
    const result= /^\d+$/.test(str) //to test if the string is numeric
    console.log(result)
}
Numeric("ajay14")
Numeric(12)



// make a function that test valid email
const EmailChecker=(email)=>{
    const re=/^[(a-z A_Z \d)+@(a-z A-Z)+.(a-z A-z)]$g/
    if(re.test(email)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
EmailChecker("ajayadsule5@gmail.com")