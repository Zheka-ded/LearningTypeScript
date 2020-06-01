console.group('enums');
// Enum Type
enum Directions {
    // Up = 4,
    Up1,
    Down1,
    Left1,
    Right1
}

console.log(Directions);
console.log(Directions.Up1);
console.log(Directions.Down1);
console.log(Directions.Left1);
console.log(Directions.Right1);

console.log(Directions[2]);

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com',
}

console.log(links.vk);
console.log(links.youtube);
console.log(links.facebook);

const enum links2 {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com',
}

const enumsArr = [links2.vk, links2.facebook, links2.youtube];

console.log(enumsArr);

console.groupEnd();