// this loading feature will help the page to load while client will wait for the load looking on the % of loading left. Since it load faster and give enough time for the page resources to load will ultimately help in client retainment. other wise client will switch to other app or page if page take longer time however we have to retain the client for only 2 second.

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}
	loadText.innerHTML = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// this scale function came from above link to range out the different values in same time and with that number.
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
