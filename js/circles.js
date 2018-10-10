function createCircles(){
  var r = 270;
  var m = document.createElement("img");
  m.src = "img/profile.png";
  document.getElementById('circle-container').appendChild(m);
  for (var i = 65; i < 91; i++) {
    var circle = document.createElement('div');
    circle.id = "circle-"+String.fromCharCode(i);
    circle.className = "alfabeto rounded-circle text-center";
    circle.innerHTML = String.fromCharCode(i);
    circle.style.transform = "rotate("+ r +"deg) translate(9.5em) rotate("+ -r +"deg)";
    r += (360/26);
    document.getElementById('circle-container').appendChild(circle);
  }
}
createCircles();

function colorirCircle(i){
// se a pergunta respondida estiver certa
  if (true ){
    document.getElementById("circle-"+String.fromCharCode(i)).classList.add("btn-success");

  }else if (true){
// se for passa a palavra
    document.getElementById("circle-"+String.fromCharCode(i)).classList.add("btn-warning");
  }else {
// se errar
    document.getElementById("circle-"+String.fromCharCode(i)).classList.add("btn-danger");
  }
}


colorirCircle();
