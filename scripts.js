const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];

let notif;

const types = ["info", "error", "success", "timeout", "alert"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.style.textTransform = "capitalize";

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
// getWords();
async function getWords() {
  const response = await fetch("https://api.api-ninjas.com/v1/randomword", {
    method: "GET",
    mode: "cors",
    headers: {
      accept: "application/json",
      "X-Api-Key": "Your API Key",
    },
  });
  if (response.ok) {
    data = await response.json();
    notif.innerText = data.word;
  } else {
    console.log(response.status);
  }
}
