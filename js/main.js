
const playButton = document.querySelector(".play-button");
const overlay = document.querySelector(".darken");
const cube = document.querySelector(".svg-cube");
const video = document.createElement("iframe");
const triangle = document.querySelector(".svg-container");

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
      duration: 3500

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
