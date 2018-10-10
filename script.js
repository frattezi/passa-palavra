var text = '{ "dados": [' +
    '{ "letra": "a", "questoes": [' +
    '{"pergunta": "Legume usado como enfeite de Halloween:", ' +
    '"resposta": "Abobora"},' +
    '{"pergunta": "Fruta com coroa:",' +
    '"resposta": "Abacaxi"} ] } ] }';

var obj = JSON.parse(text);
var textoNOVO = 'texto novo';

function LerPergunta() {
    document.getElementById('question').innerHTML = DB.dados[0].questoes[0].pergunta;
}