var nameVar = 'Caylin';
var nameVar = 'Chumbo';
console.log('namVar', nameVar);

let nameLet = 'Joo Lee';
nameLet = 'Jen Orso';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
