//GlOBALS
var CONT = 0;

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
//i é o numero da letra, 0=a
function LerPergunta(i) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var n = getRandomInt(0, 1);

    var pergunta = DB.dados[i].questoes[n].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
}

function PassouAPalavra(){
    colorirCircle(3);
    CONT++;
    LerPergunta(CONT);
}

function colorirCircle(i){
    // se a pergunta respondida estiver certa
    if (i == 1){
        document.getElementById("circle-"+String.fromCharCode(CONT+65)).classList.add("btn-success");
        
    // se errar
    }if(i == 2){
        document.getElementById("circle-"+String.fromCharCode(CONT+65)).classList.add("btn-danger");
    }
    
    // se for passa a palavra
    if (i == 3){
        document.getElementById("circle-"+String.fromCharCode(CONT+65)).classList.add("btn-warning");
    }
       
}
    