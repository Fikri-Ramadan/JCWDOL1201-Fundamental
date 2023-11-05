const myMap = new Map();

myMap.set('fikri', '02199');
myMap.set('doni', '02200');

for (const [key, value] of myMap) {
  console.log(`${key} : ${value}`)
}