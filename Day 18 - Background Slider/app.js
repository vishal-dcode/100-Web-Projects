// Get the body element and all the slide elements
const body = document.body;
const slides = document.querySelectorAll(".slide");

// Get the left and right buttons
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Initialize the active slide index
let activeSlide = 0;

// Add a click event listener to the right button
rightBtn.addEventListener("click", () => {
  // Increment the active slide index
  activeSlide++;

  // If the active slide index is greater than the number of slides, reset it to 0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  // Update the background of the body with the active slide's background
  setBgToBody();

  // Set the active slide by updating the class of the slide elements
  setActiveSlide();
});

// Add a click event listener to the left button
leftBtn.addEventListener("click", () => {
  // Decrement the active slide index
  activeSlide--;

  // If the active slide index is less than 0, set it to the index of the last slide
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  // Update the background of the body with the active slide's background
  setBgToBody();

  // Set the active slide by updating the class of the slide elements
  setActiveSlide();
});

// Call the setBgToBody function to set the initial background of the body
setBgToBody();

// Define the setBgToBody function that sets the background of the body to the active slide's background
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Define the setActiveSlide function that sets the active slide by updating the class of the slide elements
function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

"click",
  () => {
    // Increment the active slide
    activeSlide++;

    // If the active slide is greater than the number of slides, reset to the first slide
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    // Set the background of the body element to the current slide's background image
    setBgToBody();

    // Set the active class on the current slide
    setActiveSlide();
  };

// Add a click event listener to the left button
leftBtn.addEventListener("click", () => {
  // Decrement the active slide
  activeSlide--;

  // If the active slide is less than 0, set it to the last slide
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  // Set the background of the body element to the current slide's background image
  setBgToBody();

  // Set the active class on the current slide
  setActiveSlide();
});

// Set the background of the body element to the current slide's background image
setBgToBody();

// Set the active class on the current slide
function setActiveSlide() {
  // Remove the active class from all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Add the active class to the current slide
  slides[activeSlide].classList.add("active");
}

// Set the background of the body element to the current slide's background image
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}
