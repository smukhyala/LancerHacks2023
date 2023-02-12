const startQuizButton = document.querySelector('#start-quiz-button');
startQuizButton.addEventListener('click', function() {
  const textContainer = document.querySelector('#text-container');
  textContainer.style.display = 'block';
  
  let html = '';
  for (const question of questions) {
    html += `<p>${question.question}</p>`;
    html += '<ul>';
    for (const option of question.options) {
      html += `<li>${option}</li>`;
    }
    html += '</ul>';
  }
  textContainer.innerHTML = html;
});

const startAnswerButton = document.querySelector('#start-answer-button');
startQuizButton.addEventListener('click', function() {
  const textContainer = document.querySelector('#text-container');
  textContainer.style.display = 'block';
  
  let html = '';
  for (const question of questions) {
    html += `<p>${question.question}</p>`;
    html += '<ul>';
    for (const option of question.options) {
      html += `<li>${option}</li>`;
    }
    html += '</ul>';
  }
  textContainer.innerHTML = html;
});

function toggleAnswer() {
    const answerDiv = document.getElementById("answer");
    if (answerDiv.style.display === "none") {
      answerDiv.style.display = "block";
    } else {
      answerDiv.style.display = "none";
    }
  }

function unhide() {
    var hids = document.getElementsByClassName("exp");
    for (var i = 0; i < hids.length; i++) {
        hids[i].style.visibility = "visible";
    }
}

const answerBubbles = document.querySelectorAll(".answer-bubble");
                
for (let i = 0; i < answerBubbles.length; i++) {
    answerBubbles[i].addEventListener("click", function() {
    // Check if the answer is correct
    if (this.id === "answer3") {
        this.classList.add("correct");
    } else {
        this.classList.add("incorrect");
    }
    
    // Disable the other answer bubbles
    for (let j = 0; j < answerBubbles.length; j++) {
        if (answerBubbles[j] !== this) {
        answerBubbles[j].style.pointerEvents = "none";
        }
    }
    });
}

let currentQuestionIndex = 0;
const questionContainer = document.querySelector(".question");
const answerContainers = document.querySelectorAll(".answer-bubble");

function displayQuestion(question) {
    questionContainer.textContent = question.text;
    for (let i = 0; i < 4; i++) {
        answerContainers[i].textContent = question.answers[i].text;
    }
}

displayQuestion(questionsFinal[currentQuestionIndex]);

var tq = "What is the capital of France?";
var qone = "Paris";
var qtwo = "London";
var qthr = "Berlin";
var qfou = "Madrid";
var tans = "Paris";

function next() {
    var tq = "What is the capital of France?";
    var qone = "Paris";
    var qtwo = "London";
    var qthr = "Berlin";
    var qfou = "Madrid";
    var tans = "Paris";
    document.getElementById("questionText").innerHTML = tq;
    document.getElementById("answer1").innerHTML = qone;
    document.getElementById("answer2").innerHTML = qtwo;
    document.getElementById("answer3").innerHTML = qthr;
    document.getElementById("answer4").innerHTML = qfou;
    document.getElementById("answerText").innerHTML = tans;
}








const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function getQuestion() {
const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "generate an AP modern world history MCQ question and it's answer choices then explain why the correct answer is correct on a different line",
    max_tokens: 500,
});

return completion.data.choices[0].text;
}

async function logQuestion() {
const question = await getQuestion();
console.log(question);
}

logQuestion();