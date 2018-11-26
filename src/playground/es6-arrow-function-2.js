// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Caylin',
    cities: [
        'Muncie',
        'Louisville',
        'Lexington'
    ],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6, 10],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());