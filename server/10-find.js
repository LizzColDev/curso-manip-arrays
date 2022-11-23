const numbers = [1,30,49,29,10,13];

// haremos un for que nos retornará el primer valor que cumpla la condición o undefined si no se cumple

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30) { // que busque los elementos iguales a 30
        rta = element;
        break
    }
}
console.log('for', rta); // for 30

const rta2 = numbers.find(item => item === 30) // que busque los elementos iguales a 30

console.log('find', rta2); // find 30

// find en array de objetos:
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
      name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
  ];
  
// Cuando tenemos un array con objetos y usamos el método find, este nos devolverá todo el elemento

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3) // find { name: 'Burger', price: 23, id: '🍔' }

const rta4 = products.findIndex(item => item.id === '🍔') // findIndex nos busca la posición del elemento
console.log('findIndex', rta4) // findIndex 1