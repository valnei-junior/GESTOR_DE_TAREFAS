const { autores } = require ("./autores")

function listaAutores () {
    autores.forEach(autor => {
        console.log (autor)
    });
}
module.exports = { listaAutores }; 

// const { autores } = require ("./autores")

// function listaAutores () {
//     autores.forEach(function retornarAutores(autor) {
//         return autor;
//     })
        
//     };

// modules.exports = { listaAutores }; 

// duas formas de fazer uma função