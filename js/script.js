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
// Cria objeto player para salvar todas as variaveis de multijogador
sessionStorage.setItem("numplayer", 0);
var numplayer = sessionStorage.getItem('numplayer');


function mudarJogador(){
  if (sessionStorage.getItem('jogador') == "multiplayer") {
    if (numplayer == 1) {
      numplayer = 0;
      sessionStorage.setItem('numplayer', 0);
    }else {
      numplayer = 1;
      sessionStorage.setItem('numplayer', 1);
    }
    resetarCores();
    colorirTudo();
  }

}

let corCirculos = {'player': [{'cores': []},{'cores': []}]};

let player_inicio ={ 'player': [{'HIT_COUNT': 0, 'AVATAR': 7, 'LETTER_COUNT': 0, 'ERROR_COUNT': 0, 'PASS_COUNT': 0, 'LAST_RANDOM_NUMBER': 0, 'cores': []},{'HIT_COUNT': 0, 'AVATAR': 7, 'LETTER_COUNT': 0, 'ERROR_COUNT': 0, 'PASS_COUNT': 0, 'LAST_RANDOM_NUMBER': 0, 'cores': []}]};
var jogador = JSON.parse(sessionStorage.getItem("player"));

function comeco(){
  var jogador = JSON.parse(sessionStorage.getItem("player"));
  if (!jogador && INGAME == 0) {
    jogador = player_inicio;
    sessionStorage.setItem("player", JSON.stringify(player_inicio));
  }
}
comeco();


function carregaVariaveis(){
  LETTER_COUNT = jogador.player[numplayer].LETTER_COUNT;
   TEMA_ATUAL = jogador.player[numplayer].TEMA_ATUAL;
   AVATAR = jogador.player[numplayer].AVATAR;
   INGAME = jogador.player[numplayer].INGAME;
   ERROR_COUNT = jogador.player[numplayer].ERROR_COUNT;
   HIT_COUNT = jogador.player[numplayer].HIT_COUNT;
   PASS_COUNT = jogador.player[numplayer].PASS_COUNT;
   LAST_RANDOM_NUMBER = jogador.player[numplayer].LAST_RANDOM_NUMBER;
}

function salvarVariaveis(){
  jogador.player[numplayer].LETTER_COUNT = LETTER_COUNT;
  jogador.player[numplayer].TEMA_ATUAL = TEMA_ATUAL;
  jogador.player[numplayer].AVATAR = AVATAR;
  jogador.player[numplayer].INGAME = INGAME;
  jogador.player[numplayer].ERROR_COUNT = ERROR_COUNT;
  jogador.player[numplayer].HIT_COUNT = HIT_COUNT;
  jogador.player[numplayer].PASS_COUNT = PASS_COUNT;
  jogador.player[numplayer].LAST_RANDOM_NUMBER = LAST_RANDOM_NUMBER;
  sessionStorage.setItem('player', JSON.stringify(jogador));
}

carregaVariaveis();
salvarVariaveis();

const ALFABETO = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function SetAvatar(i) {
    sessionStorage.setItem('AVATAR', i);
    router("tela_final", 0);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//i é o numero da letra, 0=a
//TODO: pular letras faltantes
function LerPergunta(i) {


    if (localStorage.getItem('DADOS')) {
        DB = JSON.parse(localStorage.getItem('DADOS'))
    }
    if (LETTER_COUNT < 26) {
        TEMA_ATUAL = sessionStorage.getItem('TEMA_ATUAL');
        LAST_RANDOM_NUMBER = getRandomInt(0, DB[TEMA_ATUAL][parseInt(i)].length - 1);
        while (DB[TEMA_ATUAL][parseInt(i)][LAST_RANDOM_NUMBER] == null) {
            LETTER_COUNT++;
            i++;
            salvarVariaveis();
            if(DB[TEMA_ATUAL][parseInt(i)] == null){LETTER_COUNT=26; FinalizaJogo(26);}
        }
        var pergunta = DB[TEMA_ATUAL][parseInt(i)][LAST_RANDOM_NUMBER].pergunta;
        document.getElementById('question').innerHTML = `<span>${pergunta}</span>`;
        $('#question').textfill({
            maxFontPixels: 0
        });
        LetraFoco(LETTER_COUNT, false);
        return pergunta;
    } else {
        location = "./tela_final.html";
    }

}

function PassouAPalavra() {

    LetraFoco(LETTER_COUNT, true);
    colorirCircle(3);
    PASS_COUNT++;
    LETTER_COUNT++;
    salvarVariaveis();
    if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
        FinalizaJogo(26);
    } else {
        mudarJogador();
        carregaVariaveis();
        LerPergunta(LETTER_COUNT);
    }
}

function contador() {
    HIT_COUNT = sessionStorage.getItem('HIT');
    document.getElementById("respostaFinal").innerHTML = "Voce acertou " + HIT_COUNT + " perguntas!";
    sessionStorage.setItem('HIT', 0);
}



//Reseta as variaveis globais e redireciona para a tela correspondente ao parametro
function router(where_from, tema) {
    if (where_from == "index") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "./views/tela_temas.html";
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    } else if (where_from == "menu") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "./tela_jogo.html";
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    } else if (where_from == "criarTemas") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "./tela_criar_tema.html";
    } else if (where_from == "personalizar") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "./views/tela_criar_tema.html";
    } else if (where_from == "escolheAvatar") {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "./views/tela_avatar.html";
    } else if (where_from == "themeSelection") {
        sessionStorage.setItem('TEMA_ATUAL', tema);
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "../views/tela_jogo.html";
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    } else if (where_from == "tela_final") {
        location = "../index.html";
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    } else if (where_from == "tela_jogo") {
        location = "./tela_final.html";
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    } else if (where_from == "tela_criar_tema") {
        location = "../index.html";
        //INGAME = false;
        sessionStorage.setItem('INGAME', 0);
    } else {
        sessionStorage.setItem('HIT_COUNT', 0);
        location = "../views/tela_jogo.html";
        //INGAME = true;
        sessionStorage.setItem('INGAME', 1);
    }
    jogador = player_inicio;
    sessionStorage.setItem('player', JSON.stringify(jogador));
}

//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {

    if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
        FinalizaJogo(27);
    } else {
        LetraFoco(LETTER_COUNT, true);
        var Fres = document.getElementById('form-resposta').Fresposta.value;
        var JSres = DB[TEMA_ATUAL][i][LAST_RANDOM_NUMBER].resposta;

        document.getElementById('form-resposta').Fresposta.value = '';

        Fres = TratamentoString(Fres);
        JSres = TratamentoString(JSres);

        //Resposta correta
        if (Fres == '') {
            PassouAPalavra();
        } else if (Fres == JSres) {
            colorirCircle(1);
            HIT_COUNT++;
            sessionStorage.setItem("HIT", HIT_COUNT);
            LETTER_COUNT++;
            salvarVariaveis();
            if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
              salvarVariaveis();
                FinalizaJogo(26);
            } else {
                LerPergunta(LETTER_COUNT);
            }
        }
        //Resposta incorreta
        else {
            colorirCircle(2);
            ERROR_COUNT++;
            LETTER_COUNT++;
            salvarVariaveis();
            if (parseInt(HIT_COUNT) + parseInt(ERROR_COUNT) + parseInt(PASS_COUNT) >= 26) {
                FinalizaJogo(26);
            } else {
                mudarJogador();
                carregaVariaveis();
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
    if (i = 26) {
        document.getElementById('button-res').innerHTML = 'Finalizar Jogo';
        document.getElementById('button-res').onclick = function () {
            router('tela_jogo', 0)
        };
    }
}

function LetraFoco(letra, respondida) {
    //A letra da vez ganha o foco da pergunta
    if (respondida == false) {
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).classList.add("btn-info");
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.fontSize = "large";
    }
    //A letra da vez perde o foco da pergunta
    else {
        document.getElementById("circle-" + String.fromCharCode(letra + 65)).style.fontSize = "medium";
    }
}

//TODO: Adicionar perguntas
function adicionarQuestao() {
    if (localStorage.getItem('DADOS')) {
        DB = JSON.parse(localStorage.getItem('DADOS'))
    }
    var formQuestoes = document.getElementById('form-questoes').checkValidity();
    if (formQuestoes == true) {
        var campoLetra = document.getElementById('campo-letra').value;
        var campoPergunta = document.getElementById('campo-pergunta').value;
        var campoResposta = document.getElementById('campo-resposta').value;
        var novaChave = {
            pergunta: campoPergunta,
            resposta: campoResposta
        };
        if (regNovo[campoTema][campoLetra] == null) {
            regNovo[campoTema][campoLetra] = new Array();
        }
        regNovo[campoTema][campoLetra].push(novaChave);

        document.getElementById('campo-pergunta').value = "";
        document.getElementById('campo-resposta').value = "";
        preencheQuestoes();
    }
}

//
function salvarTema() {
    for (var i = 0; i < 26; i++) {
        if (regNovo[campoTema][i] == null) {
            regNovo[campoTema][i] = "";
        }
    }
    DB[campoTema] = regNovo[campoTema];
    localStorage.setItem("DADOS", JSON.stringify(DB));
    router("tela_criar_tema", 0);
}

//
function confirmaTema() {
    if (document.getElementById('campo-tema').value != "") {
        campoTema = document.getElementById('campo-tema').value;
        document.getElementById('campo-tema-input').innerHTML = `
        <h4 class="border-top border-bottom col text-center">
        ${campoTema}
        </h4>`;
        regNovo = new Array();
        regNovo[campoTema] = new Array();
    }
}

function deleteArray(tema, x, y) {
    //tema tem q ser string
    regNovo[tema][x].splice(y, 1);
    preencheQuestoes();
}

function preencheQuestoes() {
    document.getElementById('campo-questoes').innerHTML = "Questões:<br>";
    for (let cont = 0; cont < 25; cont++) {
        if (regNovo[campoTema][cont] != null) {
            for (let cont2 = 0; cont2 < regNovo[campoTema][cont].length; cont2++) {
                document.getElementById('campo-questoes').innerHTML += `
                <button class="btn btn-light" onclick="deleteArray('${campoTema}',${cont},${cont2})"><img width="20px" src="../img/trash.svg"></button>
                <button class="btn btn-light" onclick="editArray('${campoTema}',${cont},${cont2})"><img width="20px" src="../img/pencil.svg"></button>
                Tema: ${campoTema}
                - Letra: ${String.fromCharCode(cont+65)}
                - Pergunta: ${regNovo[campoTema][cont][cont2].pergunta}
                - Resposta: ${regNovo[campoTema][cont][cont2].resposta} <br>`;
            }
        }
    }
}

function editArray(tema, x, y) {
    document.getElementById('campo-letra').value = y;
    document.getElementById('campo-pergunta').value = regNovo[tema][x][y].pergunta;
    document.getElementById('campo-resposta').value = regNovo[tema][x][y].resposta;
    deleteArray(tema, x, y);

}

function saveGameMode() {
  for (var i = 0; i < 2; i++) {
    if (document.getElementsByName('jogador')[i].checked){
      sessionStorage.setItem("jogador", document.getElementsByName('jogador')[i].value);
    }
    if (document.getElementsByName('tempo')[i].checked){
      sessionStorage.setItem("tempo", document.getElementsByName('tempo')[i].value);
    }
  }
}
