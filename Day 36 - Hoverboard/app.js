const container = document.getElementById("container");
const colors = ["#FF5733", "#00FFFF", "#9ACD32", "#FFC0CB", "#8A2BE2", "#FFA500", "#00FF00", "#FF00FF", "#DC143C", "#000080"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.className = "square";

  square.addEventListener("mouseover", () => {
    const bgColor = (square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]);
    square.style.boxShadow = `0 0 2px ${bgColor}, 0 0 10px ${bgColor}`;
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000";
  });

  container.appendChild(square);
}
