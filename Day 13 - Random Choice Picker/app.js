// This code selects elements from the DOM and assigns them to variables
const tagsEl = document.getElementById("tags");
const textarea = document.querySelector(".textarea");

// This sets focus on the textarea element and adds an event listener for keyup events
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  // This calls the createTags function passing in the input value of the textarea
  createTags(e.target.value);

  // This checks if the Enter key was pressed, resets the input field, and calls the randomSelect function
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

// This function creates and adds tags to the DOM
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // This clears the existing tags in the DOM
  tagsEl.innerHTML = "";

  // This loops through the tags array, creates a span element for each tag, and adds it to the tagsEl element in the DOM
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// This function selects random tags and highlights them
function randomSelect() {
  const times = 30;

  // This sets an interval that selects a random tag, highlights it, and then unhighlights it after 100ms
  const interval = setInterval(() => {
    const randomTag = picKRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // This clears the interval after a set number of times, selects a random tag, and highlights it
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = picKRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// This function selects a random tag
function picKRandomTag() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}

// These functions add and remove the "highlight" class to and from the selected tag
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
