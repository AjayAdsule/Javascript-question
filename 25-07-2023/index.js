//Reverse Words in a String:
// Write a function that takes a string as input and returns the same string with each word reversed. Words are separated by a single space. For example, if the input is "Hello World", the output should be "olleH dlroW".

function reverse(str){
    let newStr= str.split('').reverse().join('')
    
}
console.log(reverse('ajay adsule'));