console.group('basicTypes');
var a = 'hello world';
console.log(a);
var q = 'Tommy';
console.log(q);
var greetUser = function () {
    console.log("Hello, nice to see you!");
};
greetUser();
// Не работает
// const greetUserTwo: void = () => {
//     console.log("Hello, nice to see you!")
// }
// Нормально описанный массив
// Мы знаем что это массив, знаем его длинну и знаем тип данных который он будет содержать
var arrOne;
arrOne = [1, 1, 1];
console.log(arrOne);
// Мы знаем что это будет массив и знаем какой тип данных он будет содержать, но не знаем длинну массива
var arrTwo; // Generic type
arrTwo = [1, 1, 1];
console.log(arrTwo);
var arrThree;
arrThree = [1, 1, 'q', 'w'];
console.log(arrThree);
var arrFour;
arrFour = ['a', 'b', 'c'];
console.log(arrFour);
var arrFive; // Tuple Type
arrFive = ['q', 5];
console.log(arrFive);
var arrSome;
arrSome = [
    { a: 1 },
    { b: 2 },
    { c: 3 },
];
console.log(arrSome);
// Enum Type
var Directions;
(function (Directions) {
    // Up = 4,
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions);
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);
// Never Type
// Function return Error
var msg = 'hello';
var error = function (msg) {
    throw new Error(msg);
};
// error(msg);
// Function infinite loop
var infiniteLoop = function () {
    while (true) {
    }
};
// infiniteLoop();
// Object Type
var create = function (o) { };
// console.log(create(1));
// console.log(create('2'));
create({ obj: 1 });
// Multiple types for one value
var id;
id = 10;
id = 'a';
var idType;
idType = 'a';
// idType = 1;
console.log(idType);
console.groupEnd();