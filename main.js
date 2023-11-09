/* Função realizar o som */
function tocoSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
/* clique botão Pom */
// document.querySelector('.tecla_pom').onclick = tocoSomPom;

// document.querySelectorAll('.tecla')

// Aqui estamos pegando a referencia lista de teclas e atribuindo a ela a lista de teclas pelo query
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocoSomPom;


let contador =0;

while (contador < 9 ) {
    listaDeTeclas[contador].onclick = tocoSomPom;

    contador = contador + 1;

    console.log(contador);
}
