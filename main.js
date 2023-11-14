function tocaSom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelector('.tecla');


//para , enquanto
for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.class.List[1];
    const idAudio = `id_${instrumento}`; //template string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }


}
    // contador = contador + 1;

    console.log(contador);
