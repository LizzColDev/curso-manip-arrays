const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const map = users.map(user => user.attributes)
console.log('map', map) // map [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]

// opción 1 para aplanar solo los atributos, primero hacer map de los atributos y luego flat
const rta = users.map(user => user.attributes).flat();
console.log('map-flat', rta) // map-flat [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// opción 2, usar el método flatMap, que nos toma solo los atributos y los aplana de una 
const rta1 = users.flatMap(user => user.attributes);
console.log('flatMap', rta1) // flatMap [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]