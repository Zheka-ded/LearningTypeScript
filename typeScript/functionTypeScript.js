console.group('functionTypeScript');
var createPassword = function (name, age) {
    if (name === void 0) { name = 'Max'; }
    if (age === void 0) { age = 20; }
    return name + " " + age;
};
console.log(createPassword());
console.log(createPassword('Jhon', 123));
console.log(createPassword('Jack', '321'));
// console.log(createPassword(null))
// Опциональное добавление второго аргумента функции
var createPasswordTwo = function (name, age) { return name + " " + age; };
console.log(createPasswordTwo('Name'));
// REST
// const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
// REST type
var createSkills = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return name + ", my skills are " + skills.join();
};
console.log(createSkills('Jhon', 'JS', 'TS', 'ES6', 'React'));
console.groupEnd();
