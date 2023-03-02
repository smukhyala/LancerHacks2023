const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();
  
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
 
  if (!name || !email || !message) {
    alert('Please fill out all required fields!');
    return;
  }
  
  // TODO: Send the form data to your server or API for processing
  
  alert('Thank you for your message! We will get back to you soon.');
  
  form.reset();
});
