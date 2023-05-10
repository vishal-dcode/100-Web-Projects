const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

const charSet = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{};:'\"\\|,.<>/?`~";
const fontSize = 16;
const columns = screenWidth / fontSize;
const drops = [];

// Create drops
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * screenHeight;
}

// Draw the characters on the canvas
function draw() {
  // Fade the characters out gradually
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, screenWidth, screenHeight);

  // Draw the characters
  for (let i = 0; i < drops.length; i++) {
    const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    ctx.fillStyle = color;
    ctx.fillText(randomChar, i * fontSize, drops[i] * fontSize);

    // Reset the drop if it goes off the screen
    if (drops[i] * fontSize > screenHeight && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Increase the speed of the drops slightly
    drops[i] += Math.random() * 0.5 + 0.5;
  }
}

// Start the animation loop
setInterval(draw, 25);
