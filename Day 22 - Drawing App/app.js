// Get the canvas and all required DOM elements
const canvas = document.getElementById("canvas");
const toolbox = document.querySelector(".toolbox");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

// Set the canvas context to 2D
const ctx = canvas.getContext("2d");

// Initialize variables
let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

// Add event listener for when mouse is pressed down on the canvas
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  // Store the initial x and y coordinates of the mouse click
  x = e.offsetX;
  y = e.offsetY;
});

// Add event listener for when mouse is released
document.addEventListener("mouseup", (e) => {
  isPressed = false;

  // Reset the x and y coordinates to undefined
  x = undefined;
  y = undefined;
});

// Add event listener for when mouse is moved on the canvas
canvas.addEventListener("mousemove", (e) => {
  // Check if mouse is pressed down
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // Call the drawCircle() function with the new coordinates
    drawCircle(x2, y2);

    // Call the drawLine() function to draw a line from the previous coordinates to the new coordinates
    drawLine(x, y, x2, y2);

    // Update the previous x and y coordinates to the new coordinates
    x = x2;
    y = y2;
  }
});

// Function to draw a circle on the canvas
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw a line on the canvas
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Function to update the size of the brush on the screen
function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

// Add event listener for when the increase button is clicked
increaseBtn.addEventListener("click", () => {
  size += 5;

  // Limit the maximum size of the brush
  if (size > 50) {
    size = 50;
  }

  // Update the brush size on the screen
  updateSizeOnScreen();
});

// Add event listener for when the decrease button is clicked
decreaseBtn.addEventListener("click", () => {
  size -= 5;

  // Limit the minimum size of the brush
  if (size < 5) {
    size = 5;
  }

  // Update the brush size on the screen
  updateSizeOnScreen();
});

// Add event listener for when the color selector is changed
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
  // Update the border color of canvas and toolbox
  canvas.style.borderColor = color;
  toolbox.style.borderColor = color;
});

// Add event listener for when the clear button is clicked
clearEl.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));
