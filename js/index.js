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

// данные для отправки
const leadForm = document.getElementById("lead-form");
const leadFormSubmitButton = document.getElementById("lead-form-submit-button");
leadFormSubmitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  // данные для отправки
  const leadName = leadForm.leadName.value;
  const leadPhone = leadForm.leadPhone.value;

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
});
