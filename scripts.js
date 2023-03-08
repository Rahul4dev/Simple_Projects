const container = document.getElementById('container');
const colors    = ['#e74c3c', '#e74c3c', '#343434', '#3498db', '#e67e22', '#2ecc71', '#3c6b32', '#94c78c', '#b39dfe', '#047ad8', '#7b24e2','#804ba5','#5d730f','#b7ec2b','#4169d9','#a3bf34','#2a6342','#21f820','#f7fb33','#103ad2','#da7573','#c6a52d','#507e71','#c4be80','#a1ae2b','#f3f884','#4ec6b5','#10e48d','#9f1b84','#1359d4','#094878','#221dd0','#27e8e3','#7b468f','#c27d16','#cc8d7a','#b8584e','#f8d8c5'];

const SQUARES = 600

for (let i = 0; i< SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}