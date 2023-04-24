// select all the accordion contents on the page
const accordionContent = document.querySelectorAll(".accordion-content");

// for each accordion content
accordionContent.forEach((item, index) => {
  // find the header element
  let header = item.querySelector("header");
  // add a click event listener to the header element
  header.addEventListener("click", () => {
    // toggle the 'open' class on the accordion content
    item.classList.toggle("open");
    // find the description element
    let description = item.querySelector(".description");
    // if the accordion content is open
    if (item.classList.contains("open")) {
      // set the height of the description element to the full height of its contents
      description.style.height = `${description.scrollHeight}px`;
      // replace the 'fa-plus' class with the 'fa-minus' class on the accordion content icon
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      // set the height of the description element to 0
      description.style.height = "0px";
      // replace the 'fa-minus' class with the 'fa-plus' class on the accordion content icon
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    // close all the other accordion contents except the current one
    removeOpen(index);
  });
});

// a function to close all the other accordion contents except the current one
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    // if the current accordion content is not the same as the one being clicked
    if (index1 != index2) {
      // remove the 'open' class from the accordion content
      item2.classList.remove("open");
      // set the height of the description element to 0
      let des = item2.querySelector(".description");
      des.style.height = "0px";
      // replace the 'fa-minus' class with the 'fa-plus' class on the accordion content icon
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
