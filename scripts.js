const buttons = document.querySelectorAll('.faq-toggle');

function toggle() {
	this.parentNode.classList.toggle('active');
}

buttons.forEach((button) => {
	button.addEventListener('click', toggle);
});
