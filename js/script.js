//US01
//i é o numero da letra, 0=a
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var n = getRandomInt(0, 1);
function LerPergunta(i) {
    var pergunta = DB.dados[i].questoes[n].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
}
//US04
function MenuPrincipal() {
    location.href = '../index.html';
}

var cont=0;
function NovoJogo() {
    location.href = 'views/tela_jogo.html';
    cont=0;
}
//US04
function ContagemPontos(acertos) {
    var contagem = document.getElementById('contagem');
    if (acertos == 1) {
        contagem.innerHTML = 'Você acertou ' + acertos + ' pergunta!';
    } else {
        contagem.innerHTML = 'Você acertou ' + acertos + ' perguntas!';
    }
}