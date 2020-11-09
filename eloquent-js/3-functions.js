
// Recursion
function isEven(n){
    if (n === 1) return false;
    if (n === 0) return true;
    if (n < 0) return isEven(-n);
    return isEven(n-2);
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false


// Bean counting

function countChar(str, char){
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            result++;
        }
    }

    return result;
}

function countBs(str){
    return countChar(str, 'B');
}

console.log(countChar('kakkerlak', 'k'));
console.log(countBs('BBC'));

