const products = [
    { title: 'Pizza', price: 121, id: '馃崟' },
    { title: 'Burger', price: 121, id: '馃崝' },
    { title: 'Hot cakes', price: 121, id: '馃' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// encontrar un producto de products // findIndex devuelve -1 si no encuentra el elemento
const productIndex = products.findIndex(item => item.id === '馃崝');
// si encuentra el producto, lo agrega a myproducts (.push) y lo elemina de products ( .splice)
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    // con .splice eliminamos un elemento, como primer par谩metro le pasamos la ubicaci贸n del elemento a eliminar y como segundo par谩metro, la cantidad de elementos que queremos eliminar a partir de este punto
    products.splice(productIndex, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update / actualizaci贸n
const productsV2 = [
    { title: 'Pizza', price: 121, id: '馃崟' },
    { title: 'Burger', price: 121, id: '馃崝' },
    { title: 'Hot cakes', price: 121, id: '馃' },
];

// queremos agregarle esta actualizaci贸n a productsV
const upDate = {
    id: '馃',
    changes: {
        price: 200,
        description: 'Delicioso'
    }
}

// le decimos que encuentre la ubicaci贸n que corresponda al id qye le estamos comparando
const productIndexV2 = productsV2.findIndex(item => item.id ===upDate.id);

// tomamos la referenci de nuestro array con la posici贸n que nos retorn贸 el findIndex anterior
productsV2[productIndexV2] = {
    // usamos spread operator para que no nos reemplace completamente el elemento, sino que respete la informaci贸n que hab铆a anterior y reemplace lo que se repite y agregue informaci贸n nueva
    ...productsV2[productIndexV2],
    ...upDate.changes,
};

console.log(productsV2); 
// output
[
    { title: 'Pizza', price: 121, id: '馃崟' },
    { title: 'Burger', price: 121, id: '馃崝' },
    {
      title: 'Hot cakes',
      price: 200,
      id: '馃',
      description: 'Delicioso'
    }
  ]

  // eliminar un elemento sin modificar el array original
  // hacer una modificaci贸n sin modificar el anterior