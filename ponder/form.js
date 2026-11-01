// WDD 131 Week 7 Ponder: optional fields and form validation.
const form = document.querySelector("#checkout-form");
const payment = document.querySelector("#payment");
const cardFields = document.querySelector("#card-fields");
const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const expiry = document.querySelector("#expiry");
const message = document.querySelector("#form-message");

function updatePaymentFields() {
  const payingByCard = payment.value === "card";
  cardFields.hidden = !payingByCard;

  // Card details are required only when card payment is selected.
  [cardName, cardNumber, expiry].forEach((field) => {
    field.required = payingByCard;
    field.disabled = !payingByCard;
  });
}

payment.addEventListener("change", updatePaymentFields);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // This assignment is a front-end practice form, not a real checkout.
  message.textContent = "Form submitted successfully! This is a practice checkout; no order or payment was processed.";
});

form.addEventListener("reset", () => {
  // Let the browser reset the controls before updating the conditional fields.
  window.setTimeout(() => {
    updatePaymentFields();
    message.textContent = "";
  }, 0);
});

updatePaymentFields();
