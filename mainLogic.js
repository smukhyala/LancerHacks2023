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

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
apiKey: "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",
});

async function getQuestion() {
  const openai = new OpenAIApi(configuration);


const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt: "generate an AP modern world history MCQ question and it's answer choices then explain why the correct answer is correct on a different line",
max_tokens: 500,
});

const text = completion.data.choices[0].text;
const textArray = text.split("\n");
const question = textArray[2];
const choiceA = textArray[4];
const choiceB = textArray[5];
const choiceC = textArray[6];
const choiceD = textArray[7];
let correctAnswer = null;
let explanation = null;

for (let i = 8; i < textArray.length; i++) {
  if (textArray[i].includes("Answer")) {
    correctAnswer = textArray[i];
  }
  else if (textArray[i].includes("Correct")) {
    correctAnswer = textArray[i];
  }
  if (textArray[i].includes("Explanation")) {
    explanation = textArray[i];
  }
}

return {
question,
choiceA,
choiceB,
choiceC,
choiceD,
correctAnswer,
explanation,
};
}

logQuestion();

async function next() {
    const questionData = await getQuestion();
    console.log(questionData)
    if (!questionData || !questionData.question || !questionData.choiceA || !questionData.choiceB || !questionData.choiceC || !questionData.choiceD || !questionData.explanation) {
        console.error('getQuestion() is not returning the expected data');
        return;
    }
    
    var tq = questionData.question;
    var qone = questionData.choiceA;
    var qtwo = questionData.choiceB;
    var qthr = questionData.choiceC;
    var qfou = questionData.choiceD;
    var tans = questionData.explanation;
    document.getElementById("questionText").innerHTML = tq;
    document.getElementById("answer1").innerHTML = qone;
    document.getElementById("answer2").innerHTML = qtwo;
    document.getElementById("answer3").innerHTML = qthr;
    document.getElementById("answer4").innerHTML = qfou;
    document.getElementById("answerText").innerHTML = tans;
}