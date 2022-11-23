const elements = [1,1,2,2];
const othersElements = [3,3,4,4]

// vamos a unir los dos arrays


// con for:

const newArray = [...elements]; // usamos el spread operator ..., para que no tome la referencia en memoria del array original
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);    
}
console.log('for', newArray) // for [1, 1, 2, 2,3, 3, 4, 4]

// con concat
const rta = elements.concat(othersElements); // no es necesario el spread operator
console.log('concat', rta) // concat [1, 1, 2, 2,3, 3, 4, 4]

// con spread operator(tener cuidado de si se va a concatenar con otro array)
const rta2 = [...elements, ...othersElements] // concatenar con spread operator // solo usar con arrays

// si queremos modificar el array original:

elements.push(...othersElements);
console.log('elements', elements)