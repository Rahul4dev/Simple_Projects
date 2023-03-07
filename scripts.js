const imagesContainer = document.getElementById("images");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const images = document.querySelectorAll("#images img");

let index = 0;

let Interval = setInterval(run, 2000);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  // since images are 300px wide, we have to translate them accordingly
  imagesContainer.style.transform = `translateX(${-index * 300}px)`;
}

function resetInterval() {
  clearInterval(Interval);
  Interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval(); // we have to reset the interval to prevent the animation from running
});
