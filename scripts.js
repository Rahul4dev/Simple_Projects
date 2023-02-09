const root = document.getElementById("root");
const colors = [
  "#f3e8ff",
  "#e9d5ff",
  "#d8b4fe",
  "#c084fc",
  "#a855f7",
  "#9333ea",
  "#7e22ce",
  "#6b21a8",
  "#581c87",
];

for (let i = 9; i > 0; i--) {
  const el = document.createElement("div");
  el.classList.add("element");
  el.style.setProperty("--size", `${i * 4}rem`);
  el.style.setProperty("--bg-color", colors[i - 1]);
  el.style.setProperty("--rotate", `${(9 - i + 1) * 17}deg`);

  root.appendChild(el);
}
