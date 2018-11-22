
function EscolheAvatar(idAvatar, inGame){
  var img = document.createElement("img");
  const pathMenu = "./";
  const pathGame = "../";
  let path = "";

  if(inGame == 0){
    path = pathMenu;
  }else{
    path = pathGame;
  }

  if(idAvatar == 1){
    img = "img/portfolio/werneck.png";
  }
  else if(idAvatar == 2){
    img = "img/portfolio/rommel.png";
  }
  else if(idAvatar == 3){
    img = "img/portfolio/cabin.png";
  }
  else if(idAvatar == 4){
    img = "img/portfolio/cake.png";
  }
  else if(idAvatar == 5){
    img = "img/portfolio/circus.png";
  }
  else if(idAvatar == 6){
    img = "img/portfolio/game.png";
  }
  else if(idAvatar == 7){
    img = "img/portfolio/profile.png";
  }
  else if(idAvatar == 8){
    img = "img/portfolio/safe.png";
  }
  else if(idAvatar == 9){
    img = "img/portfolio/submarine.png";
  }   
  
  return path+img;
}

function createCircles(){
  var r = 270;
  var m = document.createElement("img");

  if((sessionStorage.getItem('AVATAR')) != null){
    AVATAR = sessionStorage.getItem('AVATAR');
  }else{
    sessionStorage.setItem('AVATAR', '7');
  }
  if((sessionStorage.getItem('INGAME')) != null){
    INGAME = sessionStorage.getItem('INGAME');
  }else{
    sessionStorage.setItem('INGAME', '0');
  }

  m.src = EscolheAvatar(AVATAR, INGAME);
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
