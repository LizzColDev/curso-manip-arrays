const elements = ['fire', 'Air', 'Water']

// convertir el array en un string, separando cada elemento con doble guión '--'

// con for:

let rta = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const item = elements[index];
    if(index === elements.length -1) { // condicional por si es el último elemento
        rta = rta + item;
    } else {
        rta = rta + item + separator // si no es el último elemento del string le agrega el separador
    }
}

console.log(rta, 'for') // fire--Air--Water for

// con join

const rta2 = elements.join('--');
console.log(rta2, 'join') // fire--Air--Water join

// vamos a separar el string por cada palabra y posterior unirlo con un -, como si fuera una url
const title = 'Curso de Manipulación de Arrays'

const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal) // curso-de-manipulación-de-arrays