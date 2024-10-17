const prompt = require ("prompt-sync")();
const { criarAutor } = require ("./autor/criarAutor");
const { criarLivros } = require ("./Livros/criarLIvros");
const { listaAutores } = require ("./autor/ListarAutor");
const { listaLivros } = require ("./Livros/listarLivros");

const autor1 = criarAutor("Zezinho", "zezinho@email.com");
criarLivros("livro de Zezinho", autor1, "12345");

const autor2 = criarAutor("Joãozinho", "joaozinho@email.com");
criarLivros("livro de Joãozinho", autor2, "12345");

listaAutores();
listaLivros();
