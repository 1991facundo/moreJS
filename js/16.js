const tecnologias = ["html", "css", "javascript", "react", "node.js"];
const numeros = [10, 20, 30]

let nuevoArray;

//nuevoArray = tecnologias.filter(tech => tech !== "react"); //devuelve un nuevo array con las modificaciones pedidas

// console.log(nuevoArray)

//const resultado =  tecnologias.includes('React'); //true or false
// const resultado = numeros.some(num => num > 15) //true or false

//const resultado = numeros.find((num) => num > 15); //el primero que cumpla la condicion

// const resultado = numeros.every(num => num > 9) //true or false

// let array = [15, 40]
// let suma = 0
// for (let i = 0; i < array.length; i++) {
//   suma += array[i]
// }
// const resultado = numeros.reduce((total, num) => num + total, suma )

// tecnologias.forEach( tech => console.log(tech)) // devuelve cada item del contenido

const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap);

