//1 METHOD 1
// const bg = document.querySelector(".bg");
// const loadingText = document.querySelector(".loading-text");

// let load = 0;
// let interval = setInterval(blurring, 30);

// function blurring() {
//   load++;

//   if (load >= 100) {
//     clearInterval(interval);
//   }

//   loadingText.innerHTML = `${load}%`;
//   loadingText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

//1 METHOD 2
const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;
const interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load >= 100) {
    clearInterval(interval);
  }

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - load * 0.3}px)`;
}
