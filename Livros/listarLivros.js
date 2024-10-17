const { livros } = require ("./livros")

function listaLivros () {
    livros.forEach(livros => {
        console.log (livros)
    });
}
module.exports = { listaLivros }; 
