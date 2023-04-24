const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//1 Method-1 Using .then()
// function generateJoke() {
//   const config = { headers: { Accept: "application/json" } };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerText = `" ${data.joke}"`;
//     });
// }

//1 Method-2 Using async
async function generateJoke() {
  const config = { headers: { Accept: "application/json" } };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerText = `" ${data.joke} "`;
}
