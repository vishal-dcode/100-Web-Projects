// Locomotive Scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-wrapper]"),
  smooth: true,
});

// GSAP Plugin -> Flip
gsap.registerPlugin(Flip);

CustomEase.create("cubic", "0.83,0,0.17,1");
const gallery = document.querySelector(".img-gallery-ctr");
const images = gsap.utils.toArray(".img-gallery_content");

document.querySelector(".btn").addEventListener("click", () => {
  let state = Flip.getState(".img-gallery-ctr .img-gallery_content");

  gallery.classList.toggle("order");
  images.forEach((img, idx) => {
    img.classList.toggle("reorder");
  });
  Flip.from(state, {
    absolute: true,
    duration: 2,
    stagger: 0.05,
    ease: "cubic",
  });
});
