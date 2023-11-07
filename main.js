/* Função realizar o som */
function tocoSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
/* clique botão Pom */
document.querySelector('.tecla_pom').onclick = tocoSomPom;
