const nums = Array.from(document.querySelectorAll(".nums span"));
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

// Call the "runAnimation" function.
runAnimation();

function runAnimation() {
  // Loop through each number element in the "nums" array.
  nums.forEach((num, idx) => {
    // Add an event listener to the "animationend" event.
    num.addEventListener("animationend", () => {
      // Get the next number element in the "nums" array.
      const nextNum = nums[idx + 1];

      // If the current number element has the class "in".
      if (num.classList.contains("in")) {
        // Remove the class "in" and add the class "out".
        num.classList.remove("in");
        num.classList.add("out");
      }
      // If the current number element has the class "out" and the next number element exists.
      else if (num.classList.contains("out") && nextNum) {
        // Add the class "in" to the next number element.
        nextNum.classList.add("in");
      }
      // If none of the above conditions are true.
      else {
        // Add the class "hide" to the "counter" element.
        counter.classList.add("hide");
        // Add the class "show" to the "finalMessage" element.
        finalMessage.classList.add("show");
      }
    });
  });
}

// Add an event listener to the "click" event of the "replay" element.
replay.addEventListener("click", resetDOM);

function resetDOM() {
  // Remove the classes "in" and "out" from all the number elements in the "nums" array.
  nums.forEach((num) => num.classList.remove("in", "out"));
  // Add the class "in" to the first number element in the "nums" array.
  nums[0].classList.add("in");
  // Remove the class "hide" from the "counter" element.
  counter.classList.remove("hide");
  // Remove the class "show" from the "finalMessage" element.
  finalMessage.classList.remove("show");
}
