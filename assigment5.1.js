
function CelciusToFer(celcius){
    if(typeof celcius !=="number" || Number.isNaN(celcius)){
        return "The Value are Invalid!";
    } else{
       return (celcius*9/5)+32;
       
    }
}
console.log(CelciusToFer(44));
console.log(CelciusToFer(-22));
console.log(CelciusToFer("Riyad")); 


function Factorial(n){
    if(typeof n !=="number" || !Number.isInteger(n)|| n<0){
        return "Invalid input: factorial needs a non-negative integer";
    } 
    let result =1;
    for(let i=2; i<=n;i++){
        result = result * i;
    }
     return result;  
    }
console.log(Factorial(7));
console.log(Factorial(15));




function isPalindrome(word) {

    if (typeof word !== "string" || word.length === 0) {
        return "Invalid input: please provide a non-empty string";
    }

    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }

    return word === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("Riyad"));   // false



function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
 
fizzBuzz(15);