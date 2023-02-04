const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea, focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());
	tagsEl.innerHTML = '';
	// console.log(tags);
	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	const interval = setInterval(() => {
		// it will pick the tag and highlight it in intervals of 0.1 sec
		const randomTag = pickRandomTag();

		highlightTag(randomTag);
		// then unHighlight it after 0.1sec , thus it will glow like disco lights
		setTimeout(() => {
			unHighlightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		// it will stop the running interval
		clearInterval(interval);
		// we need one interval to stop on.
		setTimeout(() => {
			const randomTag = pickRandomTag();

			highlightTag(randomTag);
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight');
}
