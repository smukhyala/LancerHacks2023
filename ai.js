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