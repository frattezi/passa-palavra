function createCircles(){
  var r = 270;
  var m = document.createElement("img");
  m.src = "img/profile.png";
  document.getElementById('circle-container').appendChild(m);
  for (var i = 65; i < 91; i++) {
    var circle = document.createElement('div');
    circle.className = "alfabeto rounded-circle text-center";
    circle.id = "circle-"+i;
    circle.innerHTML = String.fromCharCode(i);
    circle.style.transform = "rotate("+ r +"deg) translate(9.5em) rotate("+ -r +"deg)";
    r += (360/26);
    document.getElementById('circle-container').appendChild(circle);
  }
}
createCircles();


function colorirCircle{

}
