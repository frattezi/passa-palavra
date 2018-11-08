//GlOBALS
//Conta em qual letra esta
var LETTER_COUNT = 0;
//Conta o numero de erros
var ERROR_COUNT = 0;
//Conta numero de acertos
var HIT_COUNT = 0;
//Conta os passa-palavra
var PASS_COUNT = 0;
//Salva ultimo numero random
var LAST_RANDOM_NUMBER = 0;

//US04 - Vai para o menu principal
function MenuPrincipal() {
    location.href = '../index.html';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//i é o numero da letra, 0=a
function LerPergunta(i) {
    if ( LETTER_COUNT < 26 ){

    LAST_RANDOM_NUMBER = getRandomInt(0, 1);
    var pergunta = DB.dados[i].questoes[LAST_RANDOM_NUMBER].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
  }else {
    location.replace("./tela_final.html")
  }
}

function PassouAPalavra(){
    colorirCircle(3);
    PASS_COUNT++;
    LETTER_COUNT++;
    if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
        FinalizaJogo(26);
    }
    else {
        LerPergunta(LETTER_COUNT);
    }
}

function colorirCircle(i) {
    // se a pergunta respondida estiver certa
    if (i == 1){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-success");

    // se errar
    }if(i == 2){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-danger");
    }

    // se for passa a palavra
    if (i == 3){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-warning");
    }
    document.getElementById("form-resposta").reset();
}

function contador() {
    HIT_COUNT = sessionStorage.getItem('HIT');
    document.getElementById("respostaFinal").innerHTML = "Voce acertou " + HIT_COUNT + " perguntas!";
}

//resets all global variables and go to game screen
function resetGame() {
    sessionStorage.setItem('HIT', '0');
    location="views/tela_jogo.html";
}



//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
        FinalizaJogo(27);
    }
    else {
        var Fres = document.getElementById('form-resposta').Fresposta.value;
        var JSres = DB.dados[i].questoes[LAST_RANDOM_NUMBER].resposta;

        document.getElementById('form-resposta').Fresposta.value = '';

        Fres = TratamentoString(Fres);
        JSres = TratamentoString(JSres);

        //Resposta correta
        if(Fres == ''){
            PassouAPalavra();
        }
        else if (Fres == JSres) {
            colorirCircle(1);
            HIT_COUNT++;
            sessionStorage.setItem("HIT", HIT_COUNT);
            LETTER_COUNT++;
            if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
                FinalizaJogo(26);
            }
            else {
                LerPergunta(LETTER_COUNT);
            }
        }
        //Resposta incorreta
        else {
            colorirCircle(2);
            ERROR_COUNT++;
            LETTER_COUNT++;
            if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
                FinalizaJogo(26);
            }
            else {
                LerPergunta(LETTER_COUNT);
            }
        }
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

//Finaliza o jogo
function FinalizaJogo(i) {
    if (i >= 26) {
        document.getElementById('button-res').innerHTML = 'Finalizar Jogo';
    }
    if (i >= 27) {
        location.href = "tela_final.html";
        contador();
    }
}
