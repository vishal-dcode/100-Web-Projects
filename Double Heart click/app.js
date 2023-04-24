const times = document.getElementById("times");
const loveMe = document.querySelector(".loveMe");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  //1 METHOD 1:
  const x = e.offsetX;
  const y = e.offsetY;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  //1 METHOD 2:
  //   const x = e.clientX;
  //   const y = e.clientY;

  //   const leftOffset = e.target.offsetLeft;
  //   const topOffset = e.target.offsetTop;

  //   const xInside = x - leftOffset;
  //   const yInside = y - topOffset;

  //   heart.style.left = xInside + "px";
  //   heart.style.top = yInside + "px";

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
