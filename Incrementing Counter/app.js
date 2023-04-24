// Select all elements with the class "counter" and store them in a NodeList
const counters = document.querySelectorAll(".counter");

// For each counter element in the NodeList, perform the following actions:
counters.forEach((counter) => {
  // Set the initial innerHTML value of the counter element to "0"
  counter.innerHTML = "0";

  // Define an upperCounter function that will be called recursively until the target value is reached
  const upperCounter = () => {
    // Get the target value for the counter from the "data-target" attribute and convert it to a number
    const target = +counter.getAttribute("data-target");

    // Get the current value of the counter and convert it to a number
    const c = +counter.innerHTML;

    // Calculate the increment for each iteration of the recursive function to gradually increase the counter value
    const increment = target / 200;

    // If the current value of the counter is less than the target value, update the innerHTML to display the current value plus the increment and call the upperCounter function again after a short delay using setTimeout()
    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(upperCounter, 5); // faster setTimeout duration
    }
    // If the current value of the counter is equal to or greater than the target value, update the innerHTML to display the target value
    else {
      counter.innerHTML = target;
    }
  };

  // Call the upperCounter function to start the recursive counter process
  upperCounter();
});

// This code updates the innerHTML of each element with the "counter" class to gradually increase from 0 to the value specified in the "data-target" attribute using a recursive function and setTimeout() to control the rate of increase.
