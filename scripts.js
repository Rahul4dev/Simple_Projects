// We use Event Bubbling and propagation

const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActiveClasses();

    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
        <i class="fa fa-heart"></i>
        <strong>Thank You!</strong>
        <br/>
        <strong>Feedback: "${selectedRating}" registered</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActiveClasses() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
