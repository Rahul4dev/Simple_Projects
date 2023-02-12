//  <span class="circle" style="top: 27px; left: 82px"></span>

const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // click coordinates of whole page
    const x = e.clientX;
    const y = e.clientY;

    // position of button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // click coordinate inside the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // to remove the circle attribute after the ripple
    setTimeout(() => circle.remove(), 500);
  });
});
