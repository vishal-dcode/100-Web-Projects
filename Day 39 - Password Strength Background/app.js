const bg = document.getElementById("bg");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const inputLength = e.target.value.length;

  const blurValue = 20 - inputLength * 2;
  bg.style.filter = `blur(${blurValue}px)`;
});
