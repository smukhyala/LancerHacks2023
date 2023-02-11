// Make an API call to OpenAI's GPT-3 to generate text
async function generateText(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/jobs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <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>'
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 1000,
        n: 1,
        stop: null,
        temperature: 0.5,
      })
    });
    const json = await response.json();
    return json.choices[0].text;
  }
  
  // Insert the generated text into the Google Docs document
  async function insertTextIntoDocs(prompt) {
    const text = await generateText(prompt);
    document.execCommand('insertText', false, text);
  }
  
  // Add a click event listener to the browser action button
  chrome.browserAction.onClicked.addListener(() => {
    const prompt = window.prompt('Enter your prompt:');
    insertTextIntoDocs(prompt);
  });
  