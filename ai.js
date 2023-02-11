const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function getQuestion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "generate an AP modern world history MCQ question ",
    max_tokens: 500,
  });

  console.log(completion.data.choices[0].text);

}

async function getreason() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "get the correct answer and explain why",
    max_tokens: 500,
  });

  console.log(completion.data.choices[0].text);

}


let q = getQuestion();
let r = getreason();

