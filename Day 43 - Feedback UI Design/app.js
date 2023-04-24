const send_ctr = document.getElementById("send-ctr");
const feedback_ctr = document.getElementById("feedback-ctr");
const sendBtn = document.getElementById("send-btn");
const faces = document.querySelectorAll(".face-ctr");

let selectedRating = "Satisfied";

faces.forEach((faces) => {
  faces.addEventListener("click", (e) => {
    removeActive();
    faces.classList.toggle("active");

    selectedRating = e.target.nextElementSibling.innerHTML;
  });
});
function removeActive() {
  for (let i = 0; i < faces.length; i++) {
    faces[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", () => {
  send_ctr.classList.add("hidden");
  feedback_ctr.classList.remove("hidden");

  feedback_ctr.innerHTML = `
  <i class="fa-solid fa-heart"></i>
  <p>Thank You!</p>
  <strong>Feedback: ${selectedRating}</strong>
  <p class="message">We'll use your feedback to improve our customer support</p>`;
});
