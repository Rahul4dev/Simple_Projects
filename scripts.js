// we'll use canvas api
// todo: Eraser function.

const canvas = document.getElementById("canvas");

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const undo = document.getElementById("undo");

const context = canvas.getContext("2d");

let isPressed = false;
let x;
let y;
colorEl.value = "Black";
let color = colorEl.value;
size = sizeEl.innerText = 2;

// for undo function
let pathArray = [];
let index = -1;

// mouse events

eraser.addEventListener("click", () => {
  if (eraser.childNodes[0].className.includes("fa-pen")) {
    eraser.childNodes[0].className = "fa-solid fa-eraser";
    canvas.style.cursor = "grab";
    color = "#f5f5f5";
    size = 8;
  } else {
    eraser.childNodes[0].className = "fa-solid fa-pen";
    canvas.style.cursor = "crosshair";
    color = colorEl.value;
    size = 4;
  }
});
// todo
// function erase(x, y, e) {
//   x2 = e.offsetX;
//   y2 = e.offsetY;
//   context.clearRect(x, y, x2, y2);
// }

increase.addEventListener("click", increaseSize);

decrease.addEventListener("click", decreaseSize);

clear.addEventListener("click", () => {
  context.clearRect(0, 0, 800, 600);
  eraser.childNodes[0].className = "fa-solid fa-pen";
  canvas.style.cursor = "crosshair";

  pathArray = [];
  index = -1;
});

// canvas events
canvas.addEventListener("mousedown", mousedown);
canvas.addEventListener("mouseup", mouseup);
canvas.addEventListener("mousemove", mousemove);

// color change from pellet
colorEl.addEventListener("change", (e) => (color = e.target.value));

// undo button functions
undo.addEventListener("click", () => {
  if (index <= 0) {
    context.clearRect(0, 0, 800, 600);
  } else {
    index -= 1;
    pathArray.pop();
    context.putImageData(pathArray[index], 0, 0);
  }
});

// mouse events
function mousedown(e) {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
}

function mouseup(e) {
  isPressed = false;
  if (e.type != "mouseout") {
    pathArray.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
    console.log(pathArray);
  }
  x = undefined;
  y = undefined;
}

function mousemove(e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
}

// for drawing circles
function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

// for lines
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2; // width of line align with width of circle
  context.stroke();
}

function decreaseSize() {
  if (sizeEl.innerText <= 1) {
    alert("Pen size cannot be increased more!");
    sizeEl.innerText = 1;
  } else {
    sizeEl.innerText--;
    size = sizeEl.innerText;
  }
}

function increaseSize() {
  if (sizeEl.innerText >= 20) {
    alert("Pen size cannot be decrease more!");
    sizeEl.innerText = 20;
  } else {
    sizeEl.innerText++;
    size = sizeEl.innerText;
  }
}
