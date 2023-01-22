const progressElement = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circleElements = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circleElements.length) {
		currentActive = circleElements.length;
	}
	update();
});

prevBtn.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	circleElements.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	const actives = document.querySelectorAll('.active');

	progressElement.style.width =
		((actives.length - 1) / (circleElements.length - 1)) * 100 + '%';

	if (currentActive === 1) {
		prevBtn.disabled = true;
	} else if (currentActive === circleElements.length) {
		nextBtn.disabled = true;
	} else {
		nextBtn.disabled = false;
		prevBtn.disabled = false;
	}
}
