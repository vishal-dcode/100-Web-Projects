// Get all elements with class "cup-small"
const smallCups = document.querySelectorAll(".cup-small");

// Get elements with IDs "liters", "percentage", and "remained"
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// Call updateBigCup function to initialize the page
updateBigCup();

// Add event listener to each cup with class "cup-small"
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});

// Function to highlight cups when clicked
function highlightCups(idx) {
  // If the current cup is full and the next cup is not full, decrement the index to avoid highlighting the next cup
  if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
    idx--;
  }

  // Highlight or unhighlight each cup up to the clicked cup
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  // Update the big cup
  updateBigCup();
}

// Function to update the big cup and the text below it
function updateBigCup() {
  // Count the number of small cups that are full
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  // Get the total number of small cups
  const totalCups = smallCups.length;

  // If no cups are full, hide the percentage text
  if (fullCups === 0) {
    percentage.style.display = "none";
    percentage.style.height = 0;
  } else {
    // Otherwise, show the percentage text and set its height to match the percentage of full cups
    percentage.style.display = "grid";
    percentage.style.height = `${(fullCups / totalCups) * 320}px`;
    percentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
  }

  // If all cups are full, hide the liters text
  if (fullCups === totalCups) {
    remained.style.display = "none";
  } else {
    // Otherwise, show the liters text and calculate the remaining liters
    remained.style.display = "flex";
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
}
