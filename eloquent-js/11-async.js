const foo = () => {
    return new Promise((resolve, reject) => {
        resolve(10);
    })
};

const prom = foo();

prom.then((res) => console.log(res))
prom.then((res) => console.log(res))

function* gen() {
    yield 4;
}

console.log(gen().next());


// BUILDING PROMISE.ALL

function Promise_all(promises) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) reject('Input value should be an array');

        if (promises.length === 0) resolve([]);

        const results = [];
        let promisesLeft = promises.length;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then(result => {
                    results[i] = result;
                    promisesLeft--;
                    if (promisesLeft === 0) {
                        resolve(results)
                    }
                })
                .catch(error => reject(error))
        }
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
}).catch(error => {
    if (error !== "X") {
        console.log("Unexpected failure:", error);
    }
});

