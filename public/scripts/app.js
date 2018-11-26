'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Caylin',
    cities: ['Muncie', 'Louisville', 'Lexington'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6, 10],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
