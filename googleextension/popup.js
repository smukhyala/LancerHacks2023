const questions = [
    {
      text: "When did the American Civil War start?",
      choices: [
        "1861",
        "1862",
        "1863",
        "1864"
      ],
      answer: "1861"
    },
    {
      text: "Who was the first President of the United States?",
      choices: [
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
        "Alexander Hamilton"
      ],
      answer: "George Washington"
    },
    {
      text: "When did the First World War start?",
      choices: [
        "1914",
        "1915",
        "1916",
        "1917"
      ],
      answer: "1914"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const answerChoicesContainer = document.getElementById("answer-choices");
    let selectedChoice;
  
    answerChoicesContainer.addEventListener("click", function(event) {
      const target = event.target;
      if (target.classList.contains("answer-choice")) {
        if (selectedChoice) {
          selectedChoice.classList.remove("selected");
        }
        selectedChoice = target;
        target.classList.add("selected");
  
        const currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        if (selectedChoice.innerText === currentQuestion.answer) {
          target.classList.add("correct");
        } else {
          target.classList.add("incorrect");
        }
      }
    });
  
    function renderQuestion() {
      const currentQuestion = questions[Math.floor(Math.random() * questions.length)];
      const questionContainer = document.getElementById("question");
      questionContainer.innerText = currentQuestion.text;
  
      answerChoicesContainer.innerHTML = "";
      currentQuestion.choices.forEach(choice => {
        const choiceElement = document.createElement("div");
        choiceElement.classList.add("answer-choice");
        choiceElement.innerText = choice;
        answerChoicesContainer.appendChild(choiceElement);
        });
        }
        
        renderQuestion();
        });
        
        