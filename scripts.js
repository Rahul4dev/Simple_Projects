const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const author = document.getElementById("author");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg");

setTimeout(getData, 2500);

function getData() {
  header.querySelector("img").style.display = "block";
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/58.jpg" alt="author" />`;
  author.innerHTML = "Sarvesh Kumar";
  date.innerHTML = "Nov 3, 2019";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
