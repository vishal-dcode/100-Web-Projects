const icon = document.querySelector("i");
const input = document.querySelector("input");

icon.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
