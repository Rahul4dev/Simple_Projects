const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionHeading = document.getElementById('question');
const level = document.querySelector('.level');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

//const apiKey = process.env.apiKey;
// Or get your own api key from : https://quizapi.io/

let data;
let currentQuizData;
let currentQuiz = 0;
let score = 0;

getQuestion();

async function getQuestion() {
  deselectAnswers();
  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`,
    config
  );
  if (response.ok) {
    data = await response.json();
    console.log(data);
    currentQuizData = data[currentQuiz];

    questionHeading.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.answers.answer_a;
    b_text.innerText = currentQuizData.answers.answer_b;
    c_text.innerText = currentQuizData.answers.answer_c;
    d_text.innerText = currentQuizData.answers.answer_d;
    level.innerText = currentQuizData.difficulty;
  }
}

function getNewQuestion() {
  if (currentQuiz < data.length) {
    currentQuizData = data[currentQuiz];

    questionHeading.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.answers.answer_a;
    b_text.innerText = currentQuizData.answers.answer_b;
    c_text.innerText = currentQuizData.answers.answer_c;
    d_text.innerText = currentQuizData.answers.answer_d;
  } else {
    quiz.innerHTML = `
              <h2>You answered ${score}/ ${data.length} question correctly</h2>
  
              <button onClick="location.reload()">Reload</button>
          `;
  }
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === currentQuizData.correct_answer) {
      score++;
    }
    deselectAnswers();
    currentQuiz++;
    getNewQuestion();
  }
});
