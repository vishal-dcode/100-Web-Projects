const header = document.querySelector("[header]");
const title = document.querySelector("[card-title]");
const excerpt = document.querySelector("[excerpt]");
const profile_img = document.querySelector("[profile-img]");
const name = document.querySelector("[author-name]");
const date = document.querySelector("[author-date]");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1500);

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
