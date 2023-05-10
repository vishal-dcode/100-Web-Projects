let activeIndex = 0;
const slides = document.getElementsByTagName("article");
const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  const [currentSlide, nextSlide] = getSlideElements(activeIndex, nextIndex);

  setSlideStatus(currentSlide, "after");
  setSlideStatus(nextSlide, "becoming-active-from-before");

  setTimeout(() => {
    setSlideStatus(nextSlide, "active");
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  const [currentSlide, nextSlide] = getSlideElements(activeIndex, nextIndex);

  setSlideStatus(currentSlide, "before");
  setSlideStatus(nextSlide, "becoming-active-from-after");

  setTimeout(() => {
    setSlideStatus(nextSlide, "active");
    activeIndex = nextIndex;
  });
};

const getSlideElements = (currentIndex, nextIndex) => [document.querySelector(`[data-index="${currentIndex}"]`), document.querySelector(`[data-index="${nextIndex}"]`)];

const setSlideStatus = (slide, status) => {
  slide.dataset.status = status;
};

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");
const handleNavToggle = () => {
  nav.dataset.transitionable = "true";
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
};

const mediaQuery = window.matchMedia("(max-width: 800px)");
mediaQuery.onchange = (e) => {
  nav.dataset.transitionable = "false";
  nav.dataset.toggled = "false";
};
