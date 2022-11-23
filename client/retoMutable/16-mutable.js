const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// // encontrar un producto de products // findIndex devuelve -1 si no encuentra el elemento
// const productIndex = products.findIndex(item => item.id === '🍔');
// // si encuentra el producto, lo agrega a myproducts (.push) y lo elemina de products ( .splice)
// if(productIndex !== -1){
//     myProducts.push(products[productIndex]);
//     // con .splice eliminamos un elemento, como primer parámetro le pasamos la ubicación del elemento a eliminar y como segundo parámetro, la cantidad de elementos que queremos eliminar a partir de este punto
//     products.splice(productIndex, 1)
// }

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

  // eliminar un elemento sin modificar el array original
const newProducts = []
const products2 = products.filter(item => item.id !== '🍔')

newProducts.push(products2)

console.log("products", products);
console.log("newProducts", newProducts);
console.log("-".repeat(10));

//Update / actualización
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

// queremos agregarle esta actualización a productsV
const upDate = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicioso'
    }
}

let productsV3 = []

const productIndexV2 = productsV2.findIndex(item => item.id ===upDate.id);
productsV3 = [
    ...productsV2,
]
productsV3[productIndexV2] = {
        // usamos spread operator para que no nos reemplace completamente el elemento, sino que respete la información que había anterior y reemplace lo que se repite y agregue información nueva
        ...productsV3[productIndexV2],
        ...upDate.changes,
    };

console.log('v3', productsV3)
console.log('v2-original', productsV2)


// // le decimos que encuentre la ubicación que corresponda al id qye le estamos comparando
// const productIndexV2 = productsV2.findIndex(item => item.id ===upDate.id);

// // tomamos la referenci de nuestro array con la posición que nos retornó el findIndex anterior
// productsV2[productIndexV2] = {
//     // usamos spread operator para que no nos reemplace completamente el elemento, sino que respete la información que había anterior y reemplace lo que se repite y agregue información nueva
//     ...productsV2[productIndexV2],
//     ...upDate.changes,
// };

// console.log(productsV2); 
// // output
// [
//     { title: 'Pizza', price: 121, id: '🍕' },
//     { title: 'Burger', price: 121, id: '🍔' },
//     {
//       title: 'Hot cakes',
//       price: 200,
//       id: '🥞',
//       description: 'Delicioso'
//     }
//   ]



