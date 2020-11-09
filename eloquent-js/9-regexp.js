// CREATING A REGULAR EXPRESSION
const re1 = new RegExp('abc');
const re2 = /abc/;

// TESTING FOR MATCHES

console.log(re1.test('11abc22')); // true
console.log(re2.test('11ac22')); // false

// SETS OF CHARACTERS

console.log(/[01a]/.test('34b0s'));

// \d - any digit character
// \D - a character that is not a digit
// \w - any alphanumeric (word) character
// \W - any non alphanumeric character
// \s - any whitespace character (space, tab, newline, and similar)
// \S - a nonwhitespace character
// any character except for newline

const dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("01-30-2003 15:20")); // true
console.log(dateTime.test("30-jan-2003 15:20")); // false

const binary = /[01]/;
const notBinary = /[^01]/;

console.log(binary.test('010100111')); // true
console.log(notBinary.test('010100111')); // false

// REPEATING PARTS OF A PATTERN

console.log(/\d+/.test('d'));
console.log(/\d*/.test(''));

console.log(/[0-9]?-[\d]?/.test('1233-2'));

//



