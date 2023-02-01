const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const loader = document.getElementById('loader');

jokeBtn.addEventListener('click', getJokes);
getJokes();
// using async await
async function getJokes() {
	const response = await fetch('https://icanhazdadjoke.com', {
		method: 'GET',
		mode: 'cors',
		headers: {
			Accept: 'application/json',
		},
	});
	if (response.ok) {
		data = await response.json();
		jokeEl.innerHTML = data.joke;
	} else {
		loader.hidden = true;
		alert("Can't fetch the joke for you, sorry");
	}
}
// getJokes();
//generateJoke();
// or using .then()
// function generateJoke() {
// 	const config = {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	};

// 	fetch('https://icanhazdadjoke.com', config)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			jokeEl.innerHTML = data.joke;
// 		});
// }
