/*
function checkNumber(num){
    if(num%2===0 ){
        console.log(`${num} is Even`);
    }else{
        console.log(`${num} is Odd`);
    }
}


checkNumber(5);
checkNumber(7);
checkNumber(10);

//let a,b,c;
function findBiggestNum(a,b,c) {
    if (a>=b && a>=c){
        console.log(`The  Biggest Number in ${a} , ${b} , ${c} is : ${a}`);

    } else if(b>=a && b>=c){
         console.log(`The  Biggest Number in ${a} , ${b} , ${c} is : ${b}`);

    } else{
         console.log(`The Biggest Number in ${a} , ${b} ,${c} is : ${c}`);
    }

}

findBiggestNum(10,30,12);
findBiggestNum(55,30,12);
findBiggestNum(31,32,33);



function reverseProgram(str){

     let result= " ";
    for(let i= str.length -1; i>=0;i--){
     result += str[i];


    }
    return result;
}

console.log(reverseProgram("Riyad"));
console.log(reverseProgram("Bangladesh"));
console.log(reverseProgram("JavaScript"));



function countVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == "a"|| str[i] == "A"|| 
            str[i]== "e" || str[i]== "E" ||
            str[i]== "i" ||str[i]== "I" ||
            str[i]== "o" || str[i]== "O" ||
            str[i]== "u" || str[i]== "U"
            ){
                count++;
            }
    }
    return count;
}
console.log(countVowel("Riyad"));
console.log(countVowel("Okay World"));
 */
const fruits = ["Mango", "Orange", "Mango", "Apple", "Apple", "Jackfruit"];

let uniqueFruits = [];
let count= 0;

for(let i=0; i<fruits.length;i++){

    let duplicate = false;
    for(let j = 0; j<i; j++){
        if(fruits[i]===fruits[j]){
            duplicate = true;
            break;
        }

    }
    if(duplicate ===false){
    uniqueFruits[count] = fruits[i];
    count++;
}
}
console.log(uniqueFruits);