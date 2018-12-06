function colorirCircle(i) {
    // se a pergunta respondida estiver certa
    if (i == 1) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-primary");
        jogador.player[numplayer].cores.push(1);
        // se errar
    } if (i == 2) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-danger");
        jogador.player[numplayer].cores.push(2);
    }

    // se for passa a palavra
    if (i == 3) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-warning");
        jogador.player[numplayer].cores.push(3);
    }
    document.getElementById("form-resposta").reset();
}
function resetarCores(){
  for (var i = 0; i < 26; i++) {
    document.getElementById("circle-" + String.fromCharCode(i + 65)).classList.remove("btn-primary");
    document.getElementById("circle-" + String.fromCharCode(i + 65)).classList.remove("btn-danger");
    document.getElementById("circle-" + String.fromCharCode(i + 65)).classList.remove("btn-warning");
    document.getElementById("circle-" + String.fromCharCode(i + 65)).classList.remove("btn-info");
    document.getElementById("circle-" + String.fromCharCode(i + 65)).classList.add("btn-basic");
    document.getElementById("form-resposta").reset();
  }
  mudaFoto();
}

function colorirTudo(){
  for (var j = 0; j < jogador.player[numplayer].cores.length; j++) {
    var k = jogador.player[numplayer].cores[j];
  if (k == 1) {
      document.getElementById("circle-" + String.fromCharCode(j + 65)).classList.add("btn-primary");
      // se errar
  } if (k == 2) {
      document.getElementById("circle-" + String.fromCharCode(j + 65)).classList.add("btn-danger");

  }
  // se for passa a palavra
  if (k == 3) {
      document.getElementById("circle-" + String.fromCharCode(j + 65)).classList.add("btn-warning");
  }
  document.getElementById("form-resposta").reset();
}
}
