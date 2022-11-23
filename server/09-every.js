const numbers =[1,30,49,29,10,13]

let rta = true;
// verificar si todos los elementos son mayores a 40
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        rta = false
    }   
}

console.log(rta, 'for') //false for // RETORNA FALSE PORQUE no todos los números son mayores a 40

// verificar si todos los elementos son menores a 40

const rta2 = numbers.every(item => item <=40)
console.log(rta2, 'every') //false every // RETORNA FALSE PORQUE HAY UN NÚMERO MAYOR A 40, TODOS DEBÍAN SER MENORES

// verificar si todos son menores a 50

const rta3 = numbers.every(item => item <=50)
console.log(rta3, 'every') // true every //RETORNA TRUE PORQUE TODOS LOS ELEMENTOS SON MENORES DE 50

// reto verificar si todos los miembros del equipo son menorers de 15 años

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const rta4 = team.every(item => item.age <=18)
console.log(rta4, 'every') // true every