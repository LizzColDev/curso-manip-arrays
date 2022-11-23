const pets = ['cats', 'dog', 'bat'];

// for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('for', includeInArray); //for true


//includes
const rta = pets.includes('dog') // includes true
console.log('includes', rta)