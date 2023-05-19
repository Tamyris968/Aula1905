alert("Funcionou!")

var nome
var selecao
var selecaodisciplina

function cadastrar() {
    nome = document.getElementeById('inputnome').value
    document.getElementeById('nomealuno').textContent = nome

    selecao = document.getElementeById('disciplina')
    selecaodisciplina = selecao.option[selecao.selecteIndex].value
}
