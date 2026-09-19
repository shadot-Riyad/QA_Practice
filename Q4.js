function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
 let str = "Riyaad"
console.log(`Vowels in ${str}: ${countVowels(str)}`);

str = "Shadot Hossan Riyad";
console.log(`Vowels in ${str}: ${countVowels(str)}`);
