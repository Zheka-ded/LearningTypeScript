console.group('basicTypes');

let a: string = 'hello world';
console.log(a);

const q: string = 'Tommy';
console.log(q);

const greetUser = (): void => {
    console.log("Hello, nice to see you!")
};

greetUser();

// Не работает
// const greetUserTwo: void = () => {
//     console.log("Hello, nice to see you!")
// }

// Нормально описанный массив
// Мы знаем что это массив, знаем его длинну и знаем тип данных который он будет содержать
let arrOne: [number, number, number];
    arrOne = [1,1,1];
console.log(arrOne)

// Мы знаем что это будет массив и знаем какой тип данных он будет содержать, но не знаем длинну массива
let arrTwo: Array <number>; // Generic type
    arrTwo = [1, 1, 1];
console.log(arrTwo);

let arrThree: Array <any>;
    arrThree = [1, 1, 'q', 'w'];
console.log(arrThree);

let arrFour: string[];
    arrFour = ['a', 'b', 'c'];
console.log(arrFour);

let arrFive: [string, number]; // Tuple Type
    arrFive = ['q', 5];
console.log(arrFive);

let arrSome: Array <object>;
    arrSome = [
        {a: 1},
        {b: 2},
        {c: 3},
    ];
console.log(arrSome);

// Enum Type
enum Directions {
    // Up = 4,
    Up,
    Down,
    Left,
    Right
}

console.log(Directions);
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);

// Never Type
// Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
};
// error(msg);

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {

    }
}

// infiniteLoop();

// Object Type
const create = (o: object | null): void => { };

// console.log(create(1));
// console.log(create('2'));
create({ obj:1 });

// Multiple types for one value
let id: number | string;

id = 10;
id = 'a';
// id = true;

// Type
type Name = string;

let idType: Name;

idType = 'a';
// idType = 1;
console.log(idType);

console.groupEnd();