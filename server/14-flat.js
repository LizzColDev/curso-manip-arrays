const matriz = [[1,2,3,],[4,5,6,[1,2]],[7,8,9]];

// dejar un array solamente
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
// tendrían que hacerse más for
console.log('for', newArray) // for [ 1, 2, 3, 4, 5, 6, [ 1, 2 ], 7, 8, 9 ]

const rta = matriz.flat() // así no se aplana todo, tenemos qe pasarle en los paréntesis el nivel hasta el que quiere aplanar
console.log('flat', rta) // flat [ 1, 2, 3, 4, 5, 6, [ 1, 2 ], 7, 8, 9 ]

const rta2 = matriz.flat(4) // se pasa el número hasta que se quiere aplanar
console.log('flat/(4)/', rta2)  //flat/(4)/ [ 1, 2, 3, 4, 5, 6, 1, 2, 7, 8, 9]

const array = [1,2,[3,4],5,6]
const result = array.flat()
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat()
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2)
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity)
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]