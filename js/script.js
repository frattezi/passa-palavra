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
<<<<<<< HEAD
cont = sessionStorage.getItem("cont");

=======
>>>>>>> master
//i é o numero da letra, 0=a
function LerPergunta(i) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

<<<<<<< HEAD
    n = getRandomInt(0, 1);

    var pergunta = DB.dados[i].questoes[n].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
=======
>>>>>>> master
}

//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    var Fres = document.getElementById('form-resposta').elements[0].value;
<<<<<<< HEAD
    var JSres = DB.dados[i].questoes[n].resposta;

    Fres = TratamentoString(Fres);
    JSres = TratamentoString(JSres);

    //Resposta correta
    if (Fres == JSres) {

    }
    //Resposta incorreta
    else {

    }

}

//Tratamento da string
function TratamentoString(str) {
    str = str.replace(/ /g, "");
    str = str.replace(/[AÁÀÂÃÄáàâãä]/g, "a");
    str = str.replace(/[B]/g, "b");
    str = str.replace(/[Cç]/g, "c");
    str = str.replace(/[D]/g, "d");
    str = str.replace(/[EÉÈÊËéèêë]/g, "e");
    str = str.replace(/[F]/g, "f");
    str = str.replace(/[G]/g, "g");
    str = str.replace(/[H]/g, "h");
    str = str.replace(/[IÍÌÎÏíìîï]/g, "i");
    str = str.replace(/[J]/g, "j");
    str = str.replace(/[K]/g, "k");
    str = str.replace(/[L]/g, "l");
    str = str.replace(/[M]/g, "m");
    str = str.replace(/[N]/g, "n");
    str = str.replace(/[OÓÒÔÕÖóòôõö]/g, "o");
    str = str.replace(/[P]/g, "p");
    str = str.replace(/[Q]/g, "q");
    str = str.replace(/[R]/g, "r");
    str = str.replace(/[S]/g, "s");
    str = str.replace(/[T]/g, "t");
    str = str.replace(/[UÚÙÛÜúùûü]/g, "u");
    str = str.replace(/[V]/g, "v");
    str = str.replace(/[W]/g, "w");
    str = str.replace(/[X]/g, "x");
    str = str.replace(/[Y]/g, "y");
    str = str.replace(/[Z]/g, "z");
    return str;
}

=======
>>>>>>> master
