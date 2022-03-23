var $tdTotalserviços = document.querySelector('.js-total-de-serviços')
var $tdTotalR$ = document.querySelector('.js-total-R$')
var $buttonConfirmar = document.querySelector('.js-botao-confirmação')

var totalR$ = 0
var totalserviços = 0


function adicionaserviço(checkbox){

 if(checkbox.checked){
 totalserviços ++
 totalR$ += parseFloat(checkbox.value)
 }
 else {
 totalserviços --
 totalR$ -= parseFloat(checkbox.value)
}

 $tdTotalR$.textContent = 'R$'+ totalR$
 $tdTotalserviços.textContent = totalCursos + ' serviço(s)'

}

$buttonConfirmar.onclick = confirmaçãototal

function confirmaçãototal() {
if(totalserviços === 0) {
 alert('Nenhum serviço selecionado')
 } else {
 alert('serviços confirmados!')
 window.location.href = 'index.html'
 }
}