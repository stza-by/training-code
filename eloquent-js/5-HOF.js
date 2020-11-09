// FLATTENING
function flat(arr = []) {
    return arr.reduce((accum, current) => {
        return Array.isArray(current) ? accum.concat(flat(current)) :
            accum.concat(current);
    }, [])
}

let arrays = [[1, 2, 3], [4, 5], [6, [7, 8]]];
console.log(flat(arrays));

// YOUR OWN LOOP
function loop(value, testFunc, updateFunc, action = {}) {

    while (testFunc(value)) {
        action(value);
        value = updateFunc(value);
    }
}

loop(10, n => n > 0, n => n - 1, console.log);

// EVERYTHING
function everyWithLoop (array, test) {

    for (let element of array) {
        if(!test(element)) return false;
    }

    return true;
}

console.log(everyWithLoop([1, 3, 5], n => n < 10));
console.log(everyWithLoop([2, 4, 16], n => n < 10));


function everyWithSome (array, test) {
    return !array.some(element => !test(element));
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));

// DOMINANT WRITING DIRECTION