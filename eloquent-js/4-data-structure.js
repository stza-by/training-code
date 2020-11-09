// the sum of a range

function range(start, end, step = 1) {
    const result = [];

    if (step < 0) {
        for (let current = start; current >= end; current += step) result.push(current);
    } else {
        for (let current = start; current <= end; current += step) result.push(current);
    }

    return result;
}

function sum(array) {
    return array.reduce((accum, currentValue) => accum + currentValue, 0);
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Reversing an array

function reverseArray(array = []) {
    return array.reduceRight((accum, current) => accum.concat(current), []);
}

function reverseArrayInPlace(array = []) {
    for (let i = 0; i <= array.length - 1 - i; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

console.log(reverseArray(['a', 'b', 'c'])); // [ 'c', 'b', 'a' ]
const arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // [ 6, 5, 4, 3, 2, 1 ]

// A LIST

function arrayToList(array = []) {
    let head = {};
    let current;

    array.forEach((value, index) => {
        const temp = {
            value,
            rest: null
        }

        if (index === 0) {
            head = temp;
            current = temp
        } else {
            current.rest = temp;
            current = temp;
        }
    })

    return head;
}

function arrayToListBack(array = []) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list = {}) {
    const array = [];
    for (let current = list; current !== null; current = current.rest) {
        array.push(current.value);
    }
    return array;
}

function prepend(element, list = {}) {
    return {value: element, rest: list}
}

function nth(list, position) {
    let result;

    for (let node = list, index = 0; node; node = node.rest, index++) {
        if (index === position) result = node.value;
    }

    return result;
}

function nthRecursive(list, position) {
    if (!list) return undefined;
    if (position === 0) return list.value;
    return nthRecursive(list.rest, position - 1);
}

console.log(arrayToList([10, 20, 30]));
console.log(arrayToListBack([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

// DEEP COMPARISON

function deepEqual(objA = {}, objB = {}) {
    if (objA === objB) return true;

    if (objA === null || typeof objA !== 'object' ||
        objB === null || typeof objB !== 'object') return false

    const keysA = Object.keys(objA),
        keysB = Object.keys(objB);

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) return false;
    }

    return true;
}

const objA = {
    here: {x: 10, y: 10},
    there: {x: 20, y: 30}
}

const objB = {
    here: {x: 10, y: 10},
    there: {x: 20, y: 30}
}

console.log(deepEqual(objA, objB));
