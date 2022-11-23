const words = ['spray', 'limit', 'elite', 'exuberant'];

//con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item);
    }
}

console.log('newArray', newArray); // newArray [ 'exuberant' ]
console.log('original', words); // original [ 'spray', 'limit', 'elite', 'exuberant' ]

// con filter

const rta = words.filter(item => item.length >= 6) // filtrar los elementos que sean menores o iguakes a 6 caracteres

console.log('rta', rta); // rta [ 'exuberant' ]
console.log('original', words); // original [ 'spray', 'limit', 'elite', 'exuberant' ]


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

    {
        customerName: 'Nicolasa',
        total: 160,
        delivered: false,
    },
];

// vamos a filtrar por las órdenes de compra entregadas
const rta3 = orders.filter(item =>item.delivered)
console.log('rta3', rta3)

// vamos a filtrar por las órdenes de compra entregadas y que tengan un valor igual o superior a 100
const rta4 = orders.filter(item =>item.delivered && item.total >=100)
console.log('rta4', rta4)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search("Nico"))