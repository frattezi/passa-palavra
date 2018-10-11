//GlOBALS
//Conta em qual letra esta
var LETTER_COUNT = 0;
//Conta o numero de erros
var ERROR_COUNT = 0;
//Conta numero de acertos
var HIT_COUNT = 0;

//Salva ultimo numero random
var LAST_RANDOM_NUMBER = 0;

//US04 - Vai para o menu principal
function MenuPrincipal() {
    location.href = '../index.html';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//US01
//Resgata o valor do contador
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
    LETTER_COUNT++;
    LerPergunta(LETTER_COUNT);
}

function colorirCircle(i){
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

    document.getElementById("respostaFinal").innerHTML = "Voce acertou "+localStorage.getItem("num_acertos")+" perguntas!";
}

//resets all global variables and go to game screen
function resetGame(where_from){
    LETTER_COUNT = 0;
    ERROR_COUNT = 0;
    HIT_COUNT = 0;
    localStorage.setItem("num_acertos", HIT_COUNT);
    if (where_from == "index"){
        location.replace("./views/tela_jogo.html")
    }
    else{
        location.replace("../views/tela_jogo.html")
    }
}



//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    var Fres = document.getElementById('form-resposta').elements[0].value;
    var JSres = DB.dados[i].questoes[LAST_RANDOM_NUMBER].resposta;

    //Resposta correta
    if (Fres.toLowerCase() == JSres.toLowerCase() ) {
        colorirCircle(1)
        HIT_COUNT++;
        localStorage.setItem("num_acertos", HIT_COUNT);
        LETTER_COUNT++;
        LerPergunta(LETTER_COUNT);
    }
    //Resposta incorreta
    else {
        colorirCircle(2)
        ERROR_COUNT++;
        LETTER_COUNT++;
        LerPergunta(LETTER_COUNT);
    }
 }
