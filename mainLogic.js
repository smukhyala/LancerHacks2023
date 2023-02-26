// start quiz logic
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



// annswer button logic
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



//toggling explanation on and off
function toggleAnswer() {
  if (answer.style.visibility === "hidden") {
    answer.style.visibility = "visible";
  } else {
    answer.style.visibility = "hidden";
  }
}



// adding the quiz text to the screen
function unhide() {
    var hids = document.getElementsByClassName("exp");
    for (var i = 0; i < hids.length; i++) {
        hids[i].style.visibility = "visible";
    }
    answer.style.visibility = "hidden";
}



// answer bubble display
const answerBubbles = document.querySelectorAll(".answer-bubble");
for (let i = 0; i < answerBubbles.length; i++) {
    answerBubbles[i].addEventListener("click", function() {
    // Check if the answer is correct (NEEDS TO BE ADAPTABLE TO EACH QUESTION)
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


// Displaying current question
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
document.getElementById("start-quiz-button").addEventListener("click", function() {
  this.style.display = "none";
  a.style.display = "none";
  aa.style.display = "none";
  });


// changing the label contents
function openLabel(evt, label) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(label).style.display = "block";
  evt.currentTarget.className += " active";
}


// Display the "Home" div on page load
document.addEventListener("DOMContentLoaded", function() {
  openLabel(event, 'Home');
});


// asnycrounous on click function
async function getQuestion() {
  const API_KEY = "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";
  const MODEL = "text-davinci-003";
  let topic = "AP Calc BC"
  let subtopic = "Taylor Series"
  const PROMPT = "Generate an " + topic + "(specifically " + subtopic + ") question and it's answer choices then explain why the correct answer is correct with detail on a different line";
  const MAX_TOKENS = 500;
  const response = await fetch(`https://api.openai.com/v1/engines/text-davinci-003/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: PROMPT,
      max_tokens: MAX_TOKENS,
      n: 1,
      stop: '',
      temperature: 0.5
    })
  });
  const completion = await response.json();
  const text = completion.choices[0].text;
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


//loading bar (make it say loading until requested items exists)
function showLoading() {
  document.querySelector('.loading').style.display = 'flex';
}
function hideLoading() {
  document.querySelector('.loading').style.display = 'none';
}


// starting async on next function
async function next() {
    const questionData = await getQuestion();
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