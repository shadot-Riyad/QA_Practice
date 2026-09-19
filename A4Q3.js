function reverseString(text1) {
  return text1.split('').reverse().join('');
}
let text1 = "automation";

console.log(`Reverse of ${text1} : ${reverseString(text1)}`);

text1 =`QA`;
console.log(`Reverse of ${text1} : ${reverseString(text1)}`);
