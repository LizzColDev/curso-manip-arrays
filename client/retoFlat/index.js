const hardMatrix = [
    [1, 2, [3, 3]],
    [4, [5, 5, [4, 2]], 6],
    [[1, [2, 3, 4, [3, [2, 1]]]], 8, 9],
  ];
  
  const recursiveArray = [];
  
  //La función recibe un array y el índice que se quiere evaluar
  const flatFunction = (array, index) => {
    // Si el índice ya es igual a lenght no hay comparación por hacer
    if (index === array.length) {
      return;
    }
  
    // Si el valor del array en ese índice es un objeto, vuelvo a llamar esta función con el índice cero.
    if (typeof array[index] === 'object') {
      flatFunction(array[index], 0);
    } else {
      // Si no es un objeto, es un valor, así que puedo hacer push()
      recursiveArray.push(array[index]);
    }
    // Independiente del If, hay que seguir evaluando las demás posiciones del array recibido.
    flatFunction(array, index + 1);
  };
  
  flatFunction(hardMatrix, 0);
  console.log('recursive:', recursiveArray);

// otra forma
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
  
  console.log(flatten(matriz)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]