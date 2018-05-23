
const playButton = document.querySelector(".play-button");
const overlay = document.querySelector(".darken");
const cube = document.querySelector(".svg-cube");
const video = document.createElement("iframe");
const triangle = document.querySelector(".svg-container");
const blocks = document.querySelectorAll(".block");

video.setAttribute("width", "300");
video.setAttribute("height", "300");
video.setAttribute("frameborder", "0");
video.setAttribute("src","https://www.youtube.com/embed/ihh-7DoDAEY?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1");
video.classList.toggle("hidden");

function buttAnimation(){
anime({
  targets: '.svg-container',
  translateX: {
    value: 300,
    duration: 1400
  },
  translateY: {
    value: -150,
    duration: 1400
  },
  scale: {
    value: 0.5,
    duration: 4400
  },
  rotate: {
    value:360,
    duration: 4800
  },
  opacity:{
    value:0,
    duration:5000
  }
});
}



function cubeAnimation() {
  setTimeout(function(){
  cube.classList.toggle("hidden");
  cube.classList.toggle("reveal");
  anime({
    targets: '.svg-cube',
    rotate: {
      value: 180,
      duration: 1000,
      delay:300

    },
    scale: {
      value: 2.1,
      duration: 1000,
      easing: 'easeInOutQuart'
    }
  });
  }, 400);
  cube.appendChild(video);
  video.classList.toggle("hidden");
  video.classList.toggle("reveal");
}






function addOverlay() {
  overlay.classList.toggle("hidden");
}



playButton.addEventListener("click",buttAnimation);
playButton.addEventListener("click",cubeAnimation);
playButton.addEventListener("click",addOverlay);


function shake(){
triangle.classList.toggle("shake");
}

playButton.addEventListener("mouseenter",shake);
playButton.addEventListener("mouseout",shake);
playButton.addEventListener("click", function(){playButton.classList.toggle("hidden-animated")});
/*
var z = 0;
function revealBlocks(){
  for(var i = 0; blocks.length > 0; i++){
    blocks[i].classList.add("reveal-block");
    blocks[i].style.animationDelay = z + "0.5s";
    z+=0.25;
  }
}
*/

function revealBlocks() {
  blocks[0].classList.add("reveal-block");
  blocks[0].style.animationDelay = "0.15s";
  blocks[1].classList.add("reveal-block");
  blocks[1].style.animationDelay = "0.3s";
  blocks[2].classList.add("reveal-block");
  blocks[2].style.animationDelay = "0.45s";
  blocks[3].classList.add("reveal-block");
  blocks[3].style.animationDelay = "0.60s";
  blocks[4].classList.add("reveal-block");
  blocks[4].style.animationDelay = "0.75s";
}



revealBlocks();
