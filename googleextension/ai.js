const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);

async function getCompletion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "generate a modern world history question",
  });

  console.log(completion.data.choices[0].text);
}

getCompletion();
