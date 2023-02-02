const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
	console.log(event);
	insert.innerHTML = `<div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keycode</small>
  </div>
  <div class="key">
    ${event.location}
    <small>event.location</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>`;
});
