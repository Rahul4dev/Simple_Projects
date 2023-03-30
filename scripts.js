const texts = [
  'Hey Friends!   🙋‍♂️',
  "I'm Rahul Singh 🤓",
  'Web Developer and Designer!👨‍🎨',
  'Love to create new Designs,',
  'and this is project is inspired from-',
  'Nishika Verma 👩‍💻',
];
const elements = {
  text1: document.getElementById('text1'),
  text2: document.getElementById('text2'),
};

const morphTime = 1;
const coolDownTime = 0.25;
let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let coolDown = coolDownTime;
elements.text1.textContent = texts[textIndex % texts.length];
elements.text2.textContent = texts[(textIndex + 1) % texts.length];
function doMorph() {
  morph -= coolDown;
  coolDown = 0;
  let fraction = morph / morphTime;
  if (fraction > 1) {
    coolDown = coolDownTime;
    fraction = 1;
  }
  setMorph(fraction);
}
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
  elements.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elements.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  fraction = 1 - fraction;
  elements.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elements.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  elements.text1.textContent = texts[textIndex % texts.length];
  elements.text2.textContent = texts[(textIndex + 1) % texts.length];
}
function doCoolDown() {
  morph = 0;
  elements.text2.style.filter = '';
  elements.text2.style.opacity = '100%';
  elements.text1.style.filter = '';
  elements.text1.style.opacity = '0%';
}
function animate() {
  requestAnimationFrame(animate);
  let newTime = new Date();
  let shouldIncrementIndex = coolDown > 0;
  let dt = (newTime - time) / 1500;
  time = newTime;
  coolDown -= dt;
  if (coolDown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }
    doMorph();
  } else {
    doCoolDown();
  }
}
animate();
