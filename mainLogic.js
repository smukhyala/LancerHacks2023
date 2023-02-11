const questions = [
{
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Berlin", "Rome"],
    "answer": "Paris"
},
{
    "question": "What is the largest ocean in the world?",
    "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    "answer": "Pacific Ocean"
},
{
    "question": "What is the name of the world's highest mountain?",
    "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Denali", "Mount Aconcagua"],
    "answer": "Mount Everest"
}
];

// Function to display the questions and options
var Poo = "question.question";
document.getElementById('displayedQuestionH').innerHTML = Poo;
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

function unhide() {
    var hid = document.getElementsByClassName("exp");
    // Emulates jQuery $(element).is(':hidden');
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}

function runGBT() {

}