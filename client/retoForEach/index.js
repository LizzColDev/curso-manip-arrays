const app = document.querySelector('#app');
app.style = 'display:grid';
const toDo = ['Sacar el perro', 'Hacer ejercicio', 'Estudiar', 'Ir al Banco'];

toDo.forEach(item => {
    const input = document.createElement('input');
    input.setAttribute("type","checkbox");
    input.style = 'margin: 12px'
    let list = document.createElement('div')
    list.style = "margin: 4px"
    list.append(input, item);
    app.append(list)
})

fruits.forEach((item, index, arr) => {
    console.log("Current: " + item.name);
    console.log("Previous: " + ((0 === index)? "START" : arr[index-1].name));
    console.log("Next: " + ((arr.length - 1 === index)? "END" : arr[index+1].name));
});

var fruits = [{
    name: "banana",
    weight: 150
}, {
    name: "apple",
    weight: 130
}, {
    name: "orange",
    weight: 160
}, {
    name: "kiwi",
    weight: 80
}]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

fruits.forEach(function(item, index) {
    console.log("Current: " + item.name);
    if (index > 0) {
        console.log("Previous: " + fruits[index - 1].name);
    }
    if (index < fruits.length - 1) {
        console.log("Next: " + fruits[index + 1].name);
    }
});