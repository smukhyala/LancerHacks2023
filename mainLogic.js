
for (let i = 0; i < question.options.length; i++) {
    console.log(`${i + 1}. ${question.options[i]}`);
}



// Check if the answer is correct
function checkAnswer(question, answer) {
return answer === question.answer;
}

// Shuffle function from Array.prototype.sort()
questions.sort(() => Math.random() - 0.5);

// Loop through each questions and ask for answers
let correctAnswers = 0;
for (const question of questions) {
askQuestion(question);
const answer = parseInt(prompt("Enter the number of the correct answer: "), 10);
if (checkAnswer(question, question.options[answer - 1])) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log(`Incorrect. The correct answer is ${question.answer}`);
}
}

// Display the final score
console.log(`You got ${correctAnswers} out of ${questions.length} questions correct.`);

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

const text = completion.data.choices[0].text;
const textArray = text.split("\n");
const question = textArray[2];
const choiceA = textArray[4];
const choiceB = textArray[5];
const choiceC = textArray[6];
const choiceD = textArray[7];
const correctAnswer = textArray[9];
const explanation = textArray[10];

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

async function logQuestion() {
const questionData = await getQuestion();
console.log( questionData.question);
console.log(questionData.choiceA);
console.log( questionData.choiceB);
console.log( questionData.choiceC);
console.log( questionData.choiceD);
console.log( questionData.correctAnswer);
console.log(questionData.explanation);
}

logQuestion();