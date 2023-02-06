const toggleBtn = document.getElementById('toggle');
const navEl = document.getElementById('nav');


toggleBtn.addEventListener('click', () => navEl.classList.toggle('active'));


// toggleBtn.addEventListener('click', () => {
//     if(navEl.classList == 'active') {
//         navEl.classList.remove('active');
//     } else {
//         navEl.classList.add('active');
//     }
// })