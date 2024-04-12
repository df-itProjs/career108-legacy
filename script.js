import Splide from "@splidejs/splide";
// import "@splidejs/splide/css/core";

const splide = new Splide(".splide", {
  type: "loop",
});
splide.mount();

const faqs = document.querySelectorAll(".faqs__item");

faqs.forEach((faq) => {
  faq.querySelector(".faqs__question").addEventListener("click", () => {
    faq.setAttribute("aria-expanded", faq.ariaExpanded === "true" ? "false" : "true");
  });
});
