//GlOBALS
//Salva qual tema está
let TEMA_ATUAL = null;
//Salva qual o avatar escolhido
let AVATAR = 7;
//Verifica se está jogando
let INGAME = 0;
//Conta em qual letra esta
let LETTER_COUNT = 0;
//Conta o numero de erros
let ERROR_COUNT = 0;
//Conta numero de acertos
let HIT_COUNT = 0;
//Conta os passa-palavra
let PASS_COUNT = 0;
//Salva ultimo numero random
let LAST_RANDOM_NUMBER = 0;

const ALFABETO = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function SetAvatar(i){
    sessionStorage.setItem('AVATAR', i);
    router("tela_final", 0);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//i é o numero da letra, 0=a
function LerPergunta(i) {
    if ( LETTER_COUNT < 26 ){
        TEMA_ATUAL = sessionStorage.getItem('TEMA_ATUAL');
        LAST_RANDOM_NUMBER = getRandomInt(0, 1);
        var pergunta = DB[TEMA_ATUAL][i][LAST_RANDOM_NUMBER].pergunta;
        document.getElementById('question').innerHTML = pergunta;
        LetraFoco(LETTER_COUNT, true);
        return pergunta;
    }else {
      location.replace("./tela_final.html")
  }
}

function PassouAPalavra() {
    LetraFoco(LETTER_COUNT, false);
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

function contador() {
    HIT_COUNT = sessionStorage.getItem('HIT');
    document.getElementById("respostaFinal").innerHTML = "Voce acertou " + HIT_COUNT + " perguntas!";
}

//Reseta as variaveis globais e redireciona para a tela correspondente ao parametro
function router(where_from, tema) {
    sessionStorage.setItem('HIT', '0');
    if (where_from == "index") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location.replace("./views/tela_temas.html");
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    }
    else if (where_from == "menu") {
        location.replace("./tela_jogo.html");
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    }
    else if (where_from == "criarTemas") {
        location.replace("./tela_criar_temas.html");
    }
    else if (where_from == "personalizar") {
        location.replace("./views/tela_criar_temas.html");
    }
    else if (where_from == "escolheAvatar") {
        location.replace("./views/tela_avatar.html");
    }
    else if (where_from == "themeSelection") {
        sessionStorage.setItem('TEMA_ATUAL', tema);
        location.replace("../views/tela_jogo.html");
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    }
    else if (where_from == "tela_final") {
        location.replace("../index.html");
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    }
    else if (where_from == "tela_jogo") {
        location.replace("./views/tela_final.html");
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    }
    else {
        location.replace("../views/tela_jogo.html");
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    }
}

//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    LetraFoco(LETTER_COUNT, false);

    if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
        FinalizaJogo(27);
    }
    else {

        var Fres = document.getElementById('form-resposta').Fresposta.value;
        var JSres = DB[TEMA_ATUAL][i][LAST_RANDOM_NUMBER].resposta;

        document.getElementById('form-resposta').Fresposta.value = '';

        Fres = TratamentoString(Fres);
        JSres = TratamentoString(JSres);

        //Resposta correta
        if (Fres == '') {
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
    str = str.replace(/[CÇç]/g, "c");
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
        //location.href = "tela_final.html";
        router("tela_final", 0);
        contador();
    }
}

function mudarTela(destino) {
    location = destino;
}

function LetraFoco (letra, respondida){
    //A letra da vez ganha o foco da pergunta
    if(respondida == false){
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).classList.add("btn-info");
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.fontSize = "large";

        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.top="55%";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.left="48.5%";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.width="45px";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.height="45px";
    }
    //A letra da vez perde o foco da pergunta
    else{
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.fontSize = "medium";

        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.top="55%";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.left="48.5%";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.width="45px";
        //document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.height="45px";
    }
}

//Em construsção
var cont = 0;
function formularioJson() {
    var letra = document.getElementById('campo-letra').value;
    var tema = document.getElementById('campo-tema').value;
    var pergunta = document.getElementById('campo-pergunta').value;
    var resposta = document.getElementById('campo-resposta').value;
    var questao = `<input type="checkbox" id="test-${cont}" value=1> Tema: ${tema} - Letra: ${letra} - Pergunta: ${pergunta} - Resposta: ${resposta}<br>`;
    document.getElementById('campo-questoes').innerHTML += questao;
    
    var DB = new Object();
    DB.tema = tema;
    DB.dados = new Array();
    DB.dados[0].letra = letra;
    DB.dados[0].questoes = new Array;
    DB.dados[0].questoes[0].pergunta = pergunta;
    DB.dados[0].questoes[0].resposta = resposta;
    var textJSON = JSON.stringify(DB);
    document.write(textJSON);
    document.getElementById('campo-questoes').innerHTML = textJSON;

    cont++;
}
