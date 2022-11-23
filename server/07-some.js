const numbers = [1,2,3,4];


let rta= false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 ===0){
        rta = true;
        break;
    }
}

console.log(rta); // true

const rta2 = numbers.some(item => item%2 === 0);
console.log(rta2) // true

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

const rta3 = orders.some(item => item.delivered);
console.log(rta3, 'rta3')

// ahora haremos el .some, para pasar una nueva fecha y verificar si se sobrepone a alguna otra cita agendada
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
  ];

const newAppointment = { // esta es la nueva cita que verificaremos con las ya agendadas en dates
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
  };

  const newAppointment2 = { // esta es la nueva cita que verificaremos con las ya agendadas en dates
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

// librería que usaremos, que nos permite comparar fechas
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

//ahora hacemos la búsqueda, si devuelve true significará que la nueva cita se sobrepone a las ya agendadas


const isOverlap = (newDate) => {
    return dates.some(date => { // aquí le decimos que busque alguno dentro de dates
        return areIntervalsOverlapping (
        {start: date.startDate, end: date.endDate}, // primer parámetro, son las fechas iniciales y finales de dates
        {start: newDate.startDate, end: newDate.endDate}, // segundo parámetro fecha inicial y final de la nueva cita a comparar
    )
    })
}

console.log('nueva cita 1', isOverlap(newAppointment)) // nueva cita 1 true, porque la nueva cita es de 19:00 a 20:30, y a esa misma hora tenemos cita "cena", que empieza a las 20 y termina a las 21
console.log('nueva cita 2', isOverlap(newAppointment2)) // nueva cita 2 false, porque antes de las 10 no tenemos ninguna cita
