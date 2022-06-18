console.log('Hello World from HTML');

//key:value
let obj = {
    name: 'Huy',
    adrress: 'Cà Mau',
};
let b = 'name';
obj[b] = 'harry';// truyền giá trị harry vào key name
obj.b = 'ali';// truyền key b: value ali vào obj
obj.name = 'amanda';// truyền chuỗi giá trị amanda vào key name
console.log('what is your name?', `my name's : `, obj['name'], obj);
console.log('where are you from?', `I'm from : `, obj.adrress);