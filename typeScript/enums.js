console.group('enums');
// Enum Type
var Directions;
(function (Directions) {
    // Up = 4,
    Directions[Directions["Up1"] = 0] = "Up1";
    Directions[Directions["Down1"] = 1] = "Down1";
    Directions[Directions["Left1"] = 2] = "Left1";
    Directions[Directions["Right1"] = 3] = "Right1";
})(Directions || (Directions = {}));
console.log(Directions);
console.log(Directions.Up1);
console.log(Directions.Down1);
console.log(Directions.Left1);
console.log(Directions.Right1);
console.log(Directions[2]);
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com";
})(links || (links = {}));
console.log(links.vk);
console.log(links.youtube);
console.log(links.facebook);
var enumsArr = ["https://vk.com/" /* vk */, "https://facebook.com" /* facebook */, "https://youtube.com/" /* youtube */];
console.log(enumsArr);
console.groupEnd();
