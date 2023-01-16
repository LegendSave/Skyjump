// Set up the canvas and rendering context
let body = document.querySelector("body");
//Fullscreen Button
let screenUI = document.createElement("div");
let exitFullscreenIcon = document.getElementById("Capa_1");
let fullscreenBTN = document.createElement("button");
let instructValue = true;
body.appendChild(screenUI);
let exitscreenfull = true;
//Creates fullscreen button
function createButtonFull(){
  if(!exitscreenfull){
  screenUI.removeChild(exitfullscreenBTN);
  exitscreenfull = true;
  }
screenUI.appendChild(fullscreenBTN);
screenUI.style.position = "absolute";
  screenUI.style.bottom = "0.1%";
  screenUI.style.right = "0.1%";
  screenUI.style.minwidth = "fit-content";
  screenUI.style.display = "inline-block";
fullscreenBTN.style.fontWeight = "bold";
fullscreenBTN.style.fontSize = "30px";
fullscreenBTN.style.backgroundColor = "transparent";
fullscreenBTN.style.borderColor = "transparent";
fullscreenBTN.title = "Fullscreen";
fullscreenBTN.onclick = function(){ enterFullscreen(); exitscreenfull = false;}
}
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("height", "30px");
svg.setAttribute("width", "30px");
svg.setAttribute("viewBox", "0 0 14 14");

let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z");
path.setAttribute("fill", "#000000");
svg.appendChild(path);
fullscreenBTN.appendChild(svg);
//Creates exit fullscreen button
let exitfullscreenIcon = document.createElement("img");
exitfullscreenIcon.src = "https://cdn-icons-png.flaticon.com/512/1/1256.png";
exitfullscreenIcon.setAttribute('width', '30px');
exitfullscreenIcon.setAttribute('height', '30px');
let exitfullscreenBTN = document.createElement("button");
function exitButtonCreate(){
screenUI.removeChild(fullscreenBTN);
screenUI.appendChild(exitfullscreenBTN);
exitfullscreenBTN.style.fontWeight = "bold";
exitfullscreenBTN.style.fontSize = "30px";
exitfullscreenBTN.style.backgroundColor = "transparent";
exitfullscreenBTN.style.borderColor = "transparent";
exitfullscreenBTN.title = "Exit fullscreen";
exitfullscreenBTN.onclick = function(){ exitFullscreen();}}
exitfullscreenBTN.appendChild(exitfullscreenIcon);

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
  screenUI.appendChild(info);
  info.innerHTML = "&#128712;";
  info.style.fontSize = "30px";
  info.title = "©2023, LegendSave";
  let canvas = document.createElement("canvas");
  body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundImage =
    "url(https://c4.wallpaperflare.com/wallpaper/260/387/688/retro-forest-background-graphics-wallpaper-preview.jpg)";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundSize = "cover";
  canvas.setAttribute('alt', "Browser requires reloading, or browser does not support this feature.");
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
      screenUI.removeChild(info);
      return canvasLoad();
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
//Player Assets
  let playerVX = 0;
  let objectVY = 0;
  document.addEventListener("keydown", e => {
    switch(event.key){
      case "a":
        playerVX = -4
        break;
      case "d":
        playerVX = 4;
        break;
      case "spacebar":
        objectVY = 4;
    }
  });

function canvasLoad(){
  let canvas = document.createElement("canvas");
  body.appendChild(canvas);
  canvas.setAttribute('id', 'canvas');
  canvas.setAttribute('alt', "Browser requires reloading, or browser does not support this feature.");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
    let instruText = {
    x: canvas.width / 2,
    y: canvas.height / 2 + 100,
    titleText: "Controls",
    font: '50px "retro"',
    textColor: "white",
    fillColor: "gray",
  };
  window.instruText = instruText;
  game();
}
  let playerX;
  let playerY;
  let startPos = true;
function game() {
  let canvas = document.getElementById("canvas");
  if(startPos){
    playerX = canvas.width/2;
    playerY = canvas.height/2;
    startPos = false;
  }
  //Gets context, and creates skyblue background
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(game);
  ctx.beginPath();
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.closePath();

  //Player positioning
    playerX += playerVX;
  if(playerX >= canvas.width + 20){
    playerX = 0;
  }else if(playerX <= -20){
    playerX = canvas.width - 20;
  }
  //Player placeholder Sprite
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.rect(playerX, playerY, 20, 20);
  ctx.fill();
  ctx.closePath();
  
      if(instructValue){
      instructions(canvas);
  }
}
document.addEventListener("keyup", e => {
    switch(event.key){
      case "a":
        playerVX = 0
        break;
      case "d":
        playerVX = 0;
        break;
      case "spacebar":
        objectVY = 0;
    }
  });
//Checking, to save resources for loading
let instruTitlepara = true;
function instructions(canvas){
  let xPos = (canvas.width/2) - 135;
  let yPos = (canvas.height/2) - 125;
  let instruDiv;
  let instruTitle;
  this.canvas = canvas;
  let ctx = canvas.getContext("2d");
  //Background for instructions
  ctx.beginPath();
  ctx.fillStyle = "rgb(27, 31, 31)";
  ctx.fillRect(xPos-198, yPos-162, 664, 556);
  ctx.fill();
  ctx.closePath();
  //Border for instructions
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.strokeStyle = "gray";
  ctx.moveTo(xPos - 200, yPos-150);
  ctx.lineTo(xPos-200, yPos + 380);
  ctx.lineTo(xPos-180, yPos+400);
  ctx.lineTo(xPos + 450, yPos + 400);
  ctx.lineTo(xPos+470, yPos+380);
  ctx.lineTo(xPos+470, yPos-150);
  ctx.lineTo(xPos+450, yPos-170);
  ctx.lineTo(xPos-180, yPos-170);
  ctx.closePath();
  ctx.stroke();
  //Content for instructions
  if(instruTitlepara){
  instruDiv = document.createElement("div");
    body.appendChild(instruDiv);
    instruDiv.style.position = "absolute";
    instruDiv.style.top = "50%";
    instruDiv.style.left = "50%";
    instruDiv.style.transform = "translate(-50%, -50%)";
  instruTitle = document.createElement("h1");
    instruDiv.appendChild(instruTitle);
    instruTitle.style.color = "white";
    instruTitle.style.fontFamily = '"retro"';
    instruTitle.innerText = "Controls";
  instruTitlepara = false;
  }
}