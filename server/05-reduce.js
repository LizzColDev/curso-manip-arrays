const totals = [1,2,3,4];

// con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum+element;
    
}

console.log(sum, 'con for'); // 10 con for

// con reduce
// el primer atributo es el acumulador(sum), luego el item que estamos iterando (element) y luego ejecutamos la función => la función sería nuestro acumulador más el item(sum + element), el segundo parámetro es el estado inicial(0). Primer parámetro, arrow function((sum, element)=> sum + element), segundo parámetro, estado inicial (0)

const rta = totals.reduce((sum, element)=> sum + element, 0)
console.log(rta, 'con reduce') //10 con reduce

// para ver la iteración
const suma = totals.reduce((acumulador, item, indice) => {
    console.log(acumulador, item, indice)
    return acumulador + item
}, 0)

console.log('suma total:',suma)

function calcSum(array) {
    const rta = array.reduce((obj, item) => obj + item, 0)
    console.log(rta)
  }

  calcSum([2, 4, 8]);