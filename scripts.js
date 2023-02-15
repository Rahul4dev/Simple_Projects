// we'll use canvas api
// todo: Eraser function, color change

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const color = document.getElementById("color");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");

let isPressed = false;
let x;
let y;
size = sizeEl.innerText = 2;

// mouse events

eraser.addEventListener("click", () => {
  if (eraser.childNodes[0].className.includes("fa-pen")) {
    eraser.childNodes[0].className = "fa-solid fa-eraser";
    canvas.style.cursor = "grab";
    // erase();
  } else {
    eraser.childNodes[0].className = "fa-solid fa-pen";
    canvas.style.cursor = "crosshair";
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
  size = sizeEl.innerText = 2;
});

// canvas events
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

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
