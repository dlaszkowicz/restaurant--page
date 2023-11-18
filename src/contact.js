const createRestaurantContactPage = () => {
  const container = document.querySelector(".content-area");

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const contactForm = document.createElement("form");

  const emailInput = document.createElement("input");
  emailInput.placeholder = "Your Email";
  emailInput.type = "email";

  contactForm.appendChild(emailInput);

  const topicSelect = document.createElement("select");

  const topicOption = document.createElement("option");
  topicOption.textContent = "Topic";

  topicSelect.appendChild(topicOption);
  contactForm.appendChild(topicSelect);

  const citySelect = document.createElement("select");

  const cityOption = document.createElement("option");
  cityOption.textContent = "City";

  citySelect.appendChild(cityOption);
  contactForm.appendChild(citySelect);

  const messageInput = document.createElement("input");
  messageInput.placeholder = "Message";
  messageInput.classList.add("message-input");

  contactForm.appendChild(messageInput);

  const termsContainer = document.createElement("div");
  const termsInput = document.createElement("input");
  termsInput.type = "checkbox";
  termsInput.name = "terms";
  const termsLabel = document.createElement("label");
  termsLabel.for = "terms";
  termsLabel.innerHTML = `I confirm that I have read the Privacy <br> Policy of Dan Inc. with office in <br> Copenhagen.`;

  termsContainer.appendChild(termsInput);
  termsContainer.appendChild(termsLabel);

  contactForm.appendChild(termsContainer);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Send";

  contactForm.appendChild(submitBtn);

  container.appendChild(formContainer);
  formContainer.appendChild(contactForm);
};
export default createRestaurantContactPage;
