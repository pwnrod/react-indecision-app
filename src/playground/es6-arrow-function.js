function square(x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const getFirstNameVersbose = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstNameVersbose('Chumbo Wumbo'));

const getFirstNameShort = (name) => name.split(' ')[0];

console.log(getFirstNameShort('Arvo Gnarly'));