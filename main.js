function tocaSom (SelectAudeo) {
   const element = document.querySelector(SelectAudeo)

   // Error null
   if (element === null) {
    console.log("Element dosen't find");
   } 

   // Error != null
   if (element != null) {
    if (element.localName === 'audio') {
        element.play();
    }
} 


 

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string


  


    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (e) {

     
        if(e.code == "Space" || e.code == "Enter") {
        tecla.classList.add('ativa');
        
    }


    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}}
