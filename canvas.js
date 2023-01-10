// Set up the canvas and rendering context
let body = document.querySelector("body");
//Fullscreen Button
let fullscreenBTN = document.createElement("button");
let exitscreenfull = true;
//Creates fullscreen button
function createButtonFull(){
  if(!exitscreenfull){
  body.removeChild(exitfullscreenBTN);
  exitscreenfull = true;
  }
body.appendChild(fullscreenBTN);
fullscreenBTN.innerHTML = `<?xml version="1.0" ?><svg height="30px" version="1.1" viewBox="0 0 14 14" width="30px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-215.000000, -257.000000)"><g id="fullscreen" transform="translate(215.000000, 257.000000)"><path d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z" id="Shape"/></g></g></g></svg>`;
fullscreenBTN.style.fontWeight = "bold";
fullscreenBTN.style.fontSize = "30px";
fullscreenBTN.style.backgroundColor = "transparent";
fullscreenBTN.style.borderColor = "transparent";
fullscreenBTN.style.position = "absolute";
fullscreenBTN.style.bottom = ".5%";
fullscreenBTN.style.right = "5.5%";
exitfullscreenBTN.style.marginBottom = "2px";
fullscreenBTN.title = "Fullscreen";
fullscreenBTN.onclick = function(){ enterFullscreen(); exitscreenfull = false;}
}
//Creates exit fullscreen button
let exitfullscreenBTN = document.createElement("button");
function exitButtonCreate(){
  body.removeChild(fullscreenBTN);
body.appendChild(exitfullscreenBTN);
exitfullscreenBTN.innerHTML = `<svg height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <g> <g id="fullscreen_x5F_exit"> <g> <polygon style="fill:#030104;" points="24.586,27.414 29.172,32 32,29.172 27.414,24.586 32,20 20,20 20,32 "></polygon> <polygon style="fill:#030104;" points="0,12 12,12 12,0 7.414,4.586 2.875,0.043 0.047,2.871 4.586,7.414 "></polygon> <polygon style="fill:#030104;" points="0,29.172 2.828,32 7.414,27.414 12,32 12,20 0,20 4.586,24.586 "></polygon> <polygon style="fill:#030104;" points="20,12 32,12 27.414,7.414 31.961,2.871 29.133,0.043 24.586,4.586 20,0 "></polygon> </g> </g> </g> </g></svg>`
exitfullscreenBTN.style.fontWeight = "bold";
exitfullscreenBTN.style.fontSize = "30px";
exitfullscreenBTN.style.backgroundColor = "transparent";
exitfullscreenBTN.style.borderColor = "transparent";
exitfullscreenBTN.style.position = "absolute";
exitfullscreenBTN.style.bottom = ".5%";
exitfullscreenBTN.style.right = "5.5%";
exitfullscreenBTN.style.marginBottom = "2px";
exitfullscreenBTN.title = "Exit fullscreen";
exitfullscreenBTN.onclick = function(){ exitFullscreen();}}
//Enters Fullscreen
function enterFullscreen() {
  var element = document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
    exitButtonCreate();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
    exitButtonCreate();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    exitButtonCreate();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
    exitButtonCreate();
  }
}
//Exits fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    createButtonFull();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    createButtonFull();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    createButtonFull();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
    createButtonFull();
  }
}
function startUp() {
  createButtonFull();
  let info = document.createElement("p");
  body.appendChild(info);
  info.innerHTML = "&#128712;";
  info.style.position = "absolute";
  info.style.bottom = ".5%";
  info.style.right = "2.5%";
  info.style.fontSize = "30px";
  info.style.marginBottom = "8px";
  info.title = "©2023, LegendSave";
  let canvas = document.createElement("canvas");
  body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundImage =
    "url(https://c4.wallpaperflare.com/wallpaper/260/387/688/retro-forest-background-graphics-wallpaper-preview.jpg)";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundSize = "cover";
  let ctx = canvas.getContext("2d");

  // Define the button properties
  let button = {
    x: canvas.width / 2,
    y: canvas.height / 2 + 100,
    width: 200,
    height: 50,
    text: "Start Game",
    font: '24px "retro"',
    textColor: "white",
    fillColor: "gray",
    hoverFillColor: "darkgrey",
    active: false,
  };
  let title = {
    x: canvas.width / 2,
    y: canvas.height / 2 - 200,
    width: 400,
    height: 300,
    font: '50px "retro"',
    text: "Sky Jump",
    color: "skyblue",
    fillColor: "darkslategray",
    strokeColor: "#36454F",
  };

  //Creates offset for button.
  let btnWidthOffset = button.x - button.width / 2;
  let btnHeightOffset = button.y - button.height / 2;
  let widthOffset = title.x - title.width / 2;
  let heightOffset = title.y - title.height / 2;
  titleImg();
  function titleImg() {
    ctx.beginPath();
    ctx.fillStyle = title.fillColor;
    ctx.strokeStyle = title.strokeColor;
    ctx.roundRect(widthOffset, heightOffset, title.width, title.height, 20);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.font = title.font;
    ctx.fillStyle = title.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      title.text,
      widthOffset + title.width / 2,
      heightOffset + title.height / 2
    );
    ctx.fill();
    ctx.closePath();
  }
  // Draw the button
  function drawButton() {
    ctx.strokeStyle = button.active ? "black" : "black";
    ctx.fillStyle = button.active ? button.hoverFillColor : button.fillColor;
    ctx.beginPath();
    ctx.roundRect(
      btnWidthOffset,
      btnHeightOffset,
      button.width,
      button.height,
      20
    );
    ctx.fill();
    ctx.stroke();

    ctx.font = button.font;
    ctx.fillStyle = button.textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      button.text,
      btnWidthOffset + button.width / 2,
      btnHeightOffset + button.height / 2
    );
  }

  // Check if the mouse is over the button
  function isMouseOverButton() {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    return (
      mouseX >= btnWidthOffset &&
      mouseX <= btnWidthOffset + button.width &&
      mouseY >= btnHeightOffset &&
      mouseY <= btnHeightOffset + button.height
    );
  }

  // Add event listeners for mouse events
  canvas.addEventListener("mousemove", function () {
    button.active = isMouseOverButton();
    if (isMouseOverButton()) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "default";
    }
    drawButton();
    titleImg();
  });

  canvas.addEventListener("click", function () {
    if (isMouseOverButton()) {
      // Button was clicked
      body.removeChild(canvas);
      body.removeChild(info);
      return game();
    }
  });

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    button.x = canvas.width / 2;
    button.y = canvas.height / 2 + 100;
    btnWidthOffset = button.x - button.width / 2;
    btnHeightOffset = button.y - button.height / 2;
    title.x = canvas.width / 2;
    title.y = canvas.height / 2 - 200;
    widthOffset = title.x - title.width / 2;
    heightOffset = title.y - title.height / 2;
    titleImg();
    drawButton();
  });
  // Initialize the button
  drawButton();
}
function game() {
  let canvas = document.createElement("canvas");
  body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let ctx = canvas.getContext("2d");
}
