// Select all the elements with class "ripple"
const buttons = document.querySelectorAll(".ripple");

// Add an event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Get the x and y coordinates of the click event
    const x = e.clientX;
    const y = e.clientY;

    // Get the top and left offset values of the button relative to its offsetParent
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Calculate the x and y coordinates for the circle element relative to the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Create a new <span> element to act as the circle
    const circle = document.createElement("span");
    circle.classList.add("circle");

    // Set the position of the circle element
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    // Append the circle element to the button element
    this.appendChild(circle);

    // Remove the circle element after 500ms
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
