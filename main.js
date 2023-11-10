// /* Função realizar o som */
// function tocaSom (idElementAudio) {

//     document.querySelector(idElementAudio).play();
// }
// /* clique botão Pom */
// // document.querySelector('.tecla_pom').onclick = tocoSomPom;

// // document.querySelectorAll('.tecla')

// // Aqui estamos pegando a referencia lista de teclas e atribuindo a ela a lista de teclas pelo query
// const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas[0].onclick = tocoSomPom;


// let contador =0;

// while (contador < 9 ) {
//     listaDeTeclas[contador].onclick = tocoSom;

//     contador = contador + 1;

//     console.log(contador);
// }

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    
    // constantes
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;


    tecla.onclick =  function () {
        tocaSom('idAudio')
    }
    contador = contador + 1;
    console.log(contador);
}