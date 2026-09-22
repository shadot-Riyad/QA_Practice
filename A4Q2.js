function findBiggestNum(a, b, c){
    if (a >= b && a >= c){
        return `${a} is the Biggest Number.`;
    }  else if (b >= a && b >= c){
        return `${b} is the Biggest Number.`;
    } else {
        return `${c} is the Biggest Number.`;
    }
}

console.log(findBiggestNum(4,5,9));
console.log(findBiggestNum(10,4,9));
console.log(findBiggestNum(11,55,19));

