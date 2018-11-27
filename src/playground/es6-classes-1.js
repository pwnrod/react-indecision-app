
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        return super.getDescription();
    }
}

const me = new Student('Caylin James', 28, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
