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