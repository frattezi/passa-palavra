function criarMenuTemas()
{
  for (var i = 0; i < DB.temas.length ; i++)
  {
      var opcao = document.createElement('BUTTON');
      opcao.id = "tema "+ (i+1);
      opcao.innerHTML = DB.temas[i].nome;
      opcao.className = "btn btn-info w-25 mt-25";
      opcao.style = "margin: 10px";
      opcao.setAttribute('onClick', "resetGame('menu')");
      document.getElementById('menu-container').appendChild(opcao);
   }
}
//criarMenuTemas();
