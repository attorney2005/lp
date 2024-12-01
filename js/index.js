function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('btn_anim');
    }
  });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-anim-btn');
for (let elm of elements) {
  observer.observe(elm);
}

// const validationName = document.getElementsByTagName('input')
//
// validationName.addEventListener('invalid', () => {
//       if (validationName.validity.valueMissing) {
//         validationName.setCustomValidity('Обязательное поле')
//       } else {
//         validationName.setCustomValidity('');
//       }
//     }
// )

function createLeadForm(formId, buttonId) {
  const form = document.getElementById(formId);
  const submitButton = document.getElementById(buttonId);

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    // данные для отправки
    const leadName = form.leadName.value;
    const leadPhone = form.leadPhone.value;

    const response = await fetch("http://localhost:3000/lead", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: leadName,
        phone: leadPhone
      })
    });

    if (response.status !== 202) {
      console.error("Server error")
    }

    window.location = "thanks.html";
  });
}

createLeadForm("lead-form", "lead-form-submit-button");
createLeadForm("lead-form-popup", "lead-form-popup-submit-button");
