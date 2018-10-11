//US04 - Mosta a quantidade de acertos
function ContagemPontos(acertos) {
    var contagem = document.getElementById('contagem');
    if (acertos == 1) {
        contagem.innerHTML = 'Você acertou ' + acertos + ' pergunta!';
    } else {
        contagem.innerHTML = 'Você acertou ' + acertos + ' perguntas!';
    }
}

//US04 - Vai para o menu principal
function MenuPrincipal() {
    location.href = '../index.html';
}

//US4 - Inicia um novo jogo, seta o contador para 0
function NovoJogo() {
    sessionStorage.setItem("cont",0);
    location.href = 'views/tela_jogo.html';
}

//US01
//Resgata o valor do contador
cont = sessionStorage.getItem("cont");

//i é o numero da letra, 0=a
function LerPergunta(i) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    n = getRandomInt(0, 1);

    var pergunta = DB.dados[i].questoes[n].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
}
//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    var Fres = document.getElementById('form-resposta').elements[0].value;
    var JSres = DB.dados[i].questoes[n].resposta;
    //Resposta correta
    if (Fres == JSres) {
        
    }
    //Resposta incorreta
    else {
        
    }

}

