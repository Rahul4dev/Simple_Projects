const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const linkedinBtn = document.getElementById('linkedin');
const hashnodeBtn = document.getElementById('hashnode');
const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');
let apiQuotes = [];

function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show new Quote

function newQuote() {
	loading();
	// pick a random quote from Api array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// if author name is unknown
	if (quote.author === null) {
		authorText.textContent = 'Autonomous';
		// OR
		// return newQuote();
	} else {
		authorText.textContent = quote.author;
	}

	// check the quote length to determine styling
	if (quote.text.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	// set quote, hide loader
	quoteText.textContent = quote.text;
	complete();
}

// Get Quotes From API
// here we use an async function fetch request within a try-catch statement
// async function is executes independently without affecting loading of the page
// So due to the magic of async function, response will not be set until fetch request do not complete and data do not get its values till the response not be parsed in json format. they will take their time and function will wait for the response. till then execution context will not stop taking calls from next lines of code. When the response get the data, it will immediately be parsed and feed to the data.
async function getQuotes() {
	loading();
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		console.log(error);
		newQuote(localQuotes);
	}
}

// Share quote on Social Media only twitter working
const link = 'https://www.florin-pop.com/blog/2019/09/100-days-100-projects/';
// encodeURI(window.location.href);
const msg = encodeURIComponent('Hey I found this Quote');
const quote = quoteText.textContent;
const author = authorText.textContent;
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}&hashtag=OpenQuote`;
	window.open(twitterUrl, '_blank');
}

function facebookQuote() {
	const facebookUrl = `https://www.facebook.com/share.php?u=${link}`;
	window.open(facebookUrl, '_blank');
}
function linkedinQuote() {
	const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
	window.open(linkedinUrl, '_blank');
}
function hashnodeQuote() {
	const hashnodeUrl = `https://www.hashnode.com/share.php?u=${link}`;
	window.open(hashnodeUrl, '_blank');
}

// EventListeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
facebookBtn.addEventListener('click', facebookQuote);
linkedinBtn.addEventListener('click', linkedinQuote);
hashnodeBtn.addEventListener('click', hashnodeQuote);

// Executing the Quote App

// on load

//newQuote();

getQuotes();
