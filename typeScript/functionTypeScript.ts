console.group('functionTypeScript');

const createPassword = (name: string = 'Max', age: number | string = 20) => `${name} ${age}`;

console.log(createPassword())
console.log(createPassword('Jhon', 123))
console.log(createPassword('Jack', '321'))
// console.log(createPassword(null))

// Опциональное добавление второго аргумента функции
const createPasswordTwo = (name: string, age?: number) => `${name} ${age}`;

console.log(createPasswordTwo('Name'));

// REST
// const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
// REST type
const createSkills = (name: string, ...skills: Array <string> ) => `${name}, my skills are ${skills.join()}`;

console.log(createSkills('Jhon', 'JS', 'TS', 'ES6', 'React'));

console.groupEnd();