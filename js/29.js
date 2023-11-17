// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      resultado.forEach((comentario) => {
        console.log(comentario);
      });
    });
};
consultarAPI();




// Fetch API  - Async Await

const consultaAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
}
consultaAPI();






// Fetch API  - Async Await (Multiples llamados)


const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultAPI = async () => {

    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    // console.log(resultado)

    // console.log('Iniciando 2da consulta')

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    // console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución PRIMER Async: ${fin - inicio} ms`)
}
consultAPI();


const consultarAPI2 = async () => {

    const inicio = performance.now()

    const [respuesta, respuesta2 ] = await Promise.all([ fetch(url), fetch(url2) ]) ///Va a cargar todo junto como un array
    
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    // console.log(resultado)
    // console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución SEGUNDO Async: ${fin - inicio} ms`)
}
consultarAPI2();