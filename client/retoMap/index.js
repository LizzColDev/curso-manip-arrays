products =[
    {
    name: "Product 1",
    price: 1000,
    stock: 10
    },
    {
    name: "Product 2",
    price: 2000,
    stock: 20
    },
];

const addNewAtrib = products.map((item)=> {
    return {
        ...item, // spread operator - copia el array original y lo pega en el nuevo array
        tax: Math.trunc(item.price* .19) // crea un nuevo atributo
    }
})

console.log('Products original', products);
console.log('AddAtribut', addNewAtrib);
console.log('AddAtribut', addNewAtrib[0].tax);