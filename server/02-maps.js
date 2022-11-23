const letter = ['a', 'b', 'c'];

// con for:
const newArray = [];
for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    newArray.push(element + '++')
}

console.log('original', letter);
console.log('new', newArray);

// con map

const newArrayMap = letter.map(item => item + '++')
console.log('new Map', newArrayMap);
