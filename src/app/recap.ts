const username: string  = 'Omar';
const sum = (a: number, b: number) =>{
    return a + b;
}

sum(2,2)

class Person {
    age: number;
    lastname: string;

    constructor(age: number, lastname: string){
        this.age = age;
        this.lastname = lastname;
    }
}

const omar = new Person(24, 'Villada');