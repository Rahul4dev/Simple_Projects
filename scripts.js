const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const randomFunction = {
  lower: gerRandomLower,
  upper: gerRandomUpper,
  number: gerRandomNumber,
  symbol: gerRandomSymbol,
};

function gerRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a = 97
}
function gerRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A = 65
}
function gerRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 0 = 48
}

function gerRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=-<>?/|,.`~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  const shuffledPassword = shufflePassword(finalPassword);
  return shuffledPassword;
}

function shufflePassword(password) {
  let a = password.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}
