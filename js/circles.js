function createCircles(){
  var r = 270;
  var m = document.createElement("img");
  m.src = "https://raw.githubusercontent.com/frattezi/passa-palavra/master/img/profile.png";
  document.getElementById('circle-container').appendChild(m);
  for (var i = 65; i < 91; i++) {
    var circle = document.createElement('div');
    circle.id = "circle-"+String.fromCharCode(i);
    circle.className = "alfabeto rounded-circle text-center btn-basic";
    circle.innerHTML = String.fromCharCode(i);
    circle.style.transform = "rotate("+ r +"deg) translate(10em) rotate("+ -r +"deg)";
    r += (360/26);
    document.getElementById('circle-container').appendChild(circle);
  }
}
createCircles();
