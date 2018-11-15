function colorirCircle(i) {
    // se a pergunta respondida estiver certa
    if (i == 1) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-primary");

        // se errar
    } if (i == 2) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-danger");
    }

    // se for passa a palavra
    if (i == 3) {
        document.getElementById("circle-" + String.fromCharCode(LETTER_COUNT + 65)).classList.add("btn-warning");
    }
    document.getElementById("form-resposta").reset();
}
