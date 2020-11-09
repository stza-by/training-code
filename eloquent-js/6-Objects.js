function normalize() {
    function action (n) {
        return n / this.length
    }
    console.log(this.coords.map(action.bind(this)));
}

normalize.call({coords: [0, 2, 3], length: 5}); // → [0, 0.4, 0.6]


const ages = new Map();
ages.set('key', 'value');
console.log(ages.entries());


const a = {'field': 2};
console.log('toString' in a); // true
console.log(a.hasOwnProperty('toString')) // false

const sym = Symbol('name');
console.log(sym);
const obj = {};
obj[sym] = 'hi there';
console.log(obj);


class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x]
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }

    [Symbol.iterator]() {
        return new MatrixIterator(this);
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {

        if (this.y === this.matrix.height) return { done: true };

        const value = { x: this.x, y: this.y, value: this.matrix.get(this.x, this.y) };

        this.x++;

        if (this.x === this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {value, done: false};
    }
}

const matrix = new Matrix(3, 3, (x, y) => `${x}_${y}`);

for(let element of matrix) {
    console.log(element);
}

// EXERCISES
// A VECTOR TYPE

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2,3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

// GROUPS and ITERABLE GROUPS
class Group {

    data = [];

    static from = (source) => {
        const group = new Group();

        for (const sourceElement of source) {
            group.add(sourceElement);
        }

        return group;
    }

    has (element) {
        return this.data.includes(element);
    }

    add (element) {
        if (!this.has(element)) this.data.push(element);
    }

    delete (element) {
        const index = this.data.indexOf(element);
        if (index) this.data.splice(index, 1);
    }

    get length () {
        return this.data.length;
    }

    [Symbol.iterator]() {
        return {
            data: this.data,
            position: 0,
            next() {
                if (this.position === this.data.length) return { done: true };
                const value = this.data[this.position];
                this.position++;
                return { value, done: false };
            }
        }
    }
}

const group = new Group();

group.add(1);
group.add(2);
group.add(3);

console.log(group);
console.log(group.has(1));
group.delete(1);
console.log(group);

const anotherGroup = Group.from([9, 10, 11, 111, 11, 12]);
console.log(anotherGroup);

for (const groupMember of anotherGroup) {
    console.log(groupMember);
}

// BORROWING A METHOD

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true
