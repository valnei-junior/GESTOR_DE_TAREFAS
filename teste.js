


// const numeros = [1, 2, 3, 4];
// const dobro = numeros.map(
//     function num(n){
//     return n * 2;
// }
// );
// console.log(dobro)


// const numeros = [1,2,3,4];
// const pares = numeros.filter(num => num % 2 ===0)
// console.log(pares)


// const numeros = [1, 2, 3, 4];
// const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// console.log(soma); // 10


// __________________________________________________________
// const numeros = [1, 2, 3, 4];
// const soma = numeros.reduce()
// function(acumulador, soma) {
//     return acumulador + soma;
//     }, 0;
//     console.log(soma); 

// -------------------------------------------------------------
// let contador = 0
// while (contador < 5 ) {
//     console.log (`Contador: $ {contador}`);
//     contador++;
// }

// corrigido

// let contador = 0
// while (contador < 5 ) {
//     if(contador % 2 === 0) {
//         console.log(contador)
//     }
//     contador++;
// }

// valor inicial e terminando em 20

// let contador = 4
// while (contador < 20 ) {
//     if(contador % 2 === 0) {
//         console.log(contador)
//     }
//     contador++;
// }



// let contador = 0;
// do {
// console.log(`Contador: ${contador}`);
// contador++;
// } while (contador < 5);

// ----------------------------------------------------

// digite o valor sair para encerrar do contrario irá continuar o laço de repetição
// const prompt = require ("prompt-sync")();
// let valordigitado;
// do {
//    valordigitado = prompt ("Digite um valor:") 
// }while (valordigitado !== "sair");
// __________________________________________________________________
// const pessoa = {
//     nome:"João"
//     idade:30
//     cidade: 'São Paulo'
// }



// for (let chave in pessoa) {
//     if (pessoa.nome ==="João"){
//         console.log("usuario encontrado")
//     }
// }

// for of

const dados = ["joaozinho", "Zezin"];
const index = dados.indexOf("joaozinho");

const elementos = dados.slice(index, 1);

console.log(dados);
console.log(elementos);
