alert("Funcionou!")

var nome
var selecao
var selecaodisciplina
var selecaomencao

function cadastrar() {
    nome = document.getElementById('inputnome').value
    document.getElementById('nomealuno').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    selecao = document.getElementById('mencao')
    selecaomencao = selecao.options[selecao.selectedIndex].value

    alert(selecaodisciplina)
    alert(selecaomencao)
    alert(nome)

    localStroge.setItem(selecaodisciplina, selecaomencao)
}

function listar() {
    var exibirmencao

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    exibirmencao = localStroge.getItem(selecaodisciplina)

    document.getElementById('exibirdisciplina').textContent = selecaodisciplina
    document.getElementById('exibirmencao').textContent = exibirmencao
}
