const numbers = [1,3,2,3];

// reduce para que nos muestre un objeto, donde diga el elemento y cuántas veces se repite dentro del array

const rta = numbers.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    } 
    return obj;
}, {});

console.log(rta) //{ '1': 1, '2': 1, '3': 2 }

const items = [1,2,3,1,4,3,3];
const rta2 = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    } 
    return obj;
}, {});

console.log(rta2) //{ '1': 2, '2': 1, '3': 3, '4': 1 }

const data = [
    {
    name: "Nicolas",
    level: "low",
    },
    {
    name: "Andrea",
    level: "medium",
    },
    {
    name: "Zulema",
    level: "hight",
    },
    {
    name: "Santiago",
    level: "low",
    },
    {
    name: "Valentina",
    level: "medium",
    },
    {
    name: "Lucia",
    level: "hight",
    },
];

// queremos que nos muestre la cantidad de jugadores por niveles(cuántos tienen nivel medio, cuántos bajo y cuántos alto)
// primero como solo requerimos los level, entonces le pasaremos .map, para que nos devuelva un objeto con los level únicamente
// posterior le pasaremos el reduce
const rta3 = data.map(item => item.level).reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    } 
    return obj;
}, {});

console.log(rta3, 'rta3') // { low: 2, medium: 2, hight: 2 } rta3 




const items2 = [1,2,3,1,4,3,3,7,9,8,7,5,2,4,6,9,7,2,1,9,9,8,7,4,3,2,6,1,8];
function item5(){
    const rta5 = items2.reduce((obj, item) => {
        if(item<=5){
            obj['1-5']++
        } else if(item<=8){
            obj['6-8']++
        } else{
            obj['9-10']++
        }
        return obj
        
    }, {
        '1-5': 0,
        '6-8': 0,
        '9-10': 0
    });
    console.log(rta5)
}

item5(items2)