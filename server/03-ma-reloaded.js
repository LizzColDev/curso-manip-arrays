const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },

    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },

    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },

    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
console.log('original', orders) // muestra el objeto original
const rest= orders.map(item =>item.total); 
console.log('rta', rest) // muestra solo los valores totales

// ahora vamos a agregar un nuevo elemento a cada uno de los objetos dentro de nuestro array

// const rta2 = orders.map((item)=> {
//    item.tax = .19;
//    return item;
// });
// console.log('rta2 ', rta2)
// console.log('original', orders)

const rta3 =orders.map((item)=>{
    return {  // nos aseguramos que retorne un nuevo objeto
        ...item, // con spreed operator copiamos el array original
        tax: .19 // aquí le agregamos el item a cada objeto
    };
});

console.log('original', orders)
console.log('rta3 ', rta3)