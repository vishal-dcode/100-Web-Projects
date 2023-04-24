const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// Set the current active step to 1
let currentActive = 1;

// Add a click event listener to the next button
next.addEventListener("click", () => {
  // Increment the current active step
  currentActive++;

  // If the current active step is greater than the number of circles, set it to the last circle
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // Call the update function to update the progress tracker
  update();
});

// Add a click event listener to the previous button
prev.addEventListener("click", () => {
  // Decrement the current active step
  currentActive--;

  // If the current active step is less than 1, set it to the first circle
  if (currentActive < 1) {
    currentActive = 1;
  }

  // Call the update function to update the progress tracker
  update();
});

// Define the update function to update the progress tracker
function update() {
  // Loop through all circles
  circles.forEach((circle, idx) => {
    // If the index of the circle is less than the current active step, add the "active" class to it, otherwise remove the "active" class
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Get all circles with the "active" class
  const actives = document.querySelectorAll(".active");

  // Update the width of the progress bar based on the number of completed steps
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

  // Disable the previous button if the current active step is the first step, disable the next button if it's the last step, otherwise enable both buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
