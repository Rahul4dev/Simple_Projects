const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Andrew Rico',
    position: 'Marketing',
    photo: 'assets/andrea-rico-yHhtT7-A1Xg-unsplash.jpg',
    text: 'This person is passionate and hardworking. His enthusiasm is very encouraging to other people and help to motivate them to give their best shot. He also possess great oratorial leadership skills and sensitive to peoples hard work. His insight to development and project management is out of the world. He stresses on good, clean code and pays heed to the details. He goes over and beyond and transform ART into PIXELS without a glitch, every time.',
  },
  {
    name: 'Anil Sharma',
    position: 'Freelance Developer',
    photo: 'assets/anil-sharma-w3bkCjUj_N4-unsplash.jpg',
    text: 'Nice to work with him. He has good confidence in his development works and skills. His communication with other developer is very good and he is responsive all the time, something that is not easy to find in new developers. We will definitely take his service again.',
  },
  {
    name: 'Austin Distel',
    position: 'Development Head',
    photo: 'assets/austin-distel-7uoMmzPd2JA-unsplash.jpg',
    text: 'This guy does everything he can to get the job done and done right. He is ver yprofessional to his work and deliver on time. His leadership qualities are great and encouraging. His collegues and juniors always demand for his input in the project to get the unique perspective in the development process.',
  },
  {
    name: 'Usman Yousaf',
    position: 'Graphic Designer',
    photo: 'assets/usman-yousaf-yIOViGQmjJ4-unsplash.jpg',
    text: "I had my concerns that due to a tight deadline this project can't be done, but this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again.",
  },
  {
    name: 'Yogendra Singh',
    position: 'Senior developer',
    photo: 'assets/yogendra-singh-HrpYHchKb5Y-unsplash.jpg',
    text: 'This guy is top notch designer and frontend developer. He communicates well, works fast and produces quality work. We have lucky to work with him ',
  },
  {
    name: 'Mathew Scott',
    position: 'Frontend Developer',
    photo: 'assets/podpros-CgCH4V4cNGk-unsplash.jpg',
    text: 'This guy is young and talented designer, proactive and responsible, with a strong work ethic. He is strong in code upgrading and migrations. He is quick leaner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
];

let index = 1;

function updateTestimonials() {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index >= testimonials.length) {
    index = 0;
  }
}

setInterval(updateTestimonials, 3000);
// same time interval as we have used in animation in CSS.  animation: grow 10s linear infinite;
