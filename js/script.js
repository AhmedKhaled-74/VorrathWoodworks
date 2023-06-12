/*******Hero Arrow********* */

const arrowSection = document.querySelector(".arrow-box");
const arrowIcon = document.getElementById("arrow-down");
let isArrowVisible = false;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isArrowVisible) {
        isArrowVisible = true;
        setTimeout(() => {
          arrowIcon.classList.add("translate-y-full");
          arrowIcon.classList.add("opacity-0");
          arrowIcon.classList.remove("opacity-100");
        }, 500);
      } else if (!entry.isIntersecting && isArrowVisible) {
        isArrowVisible = false;
        setTimeout(() => {
          arrowIcon.classList.remove("translate-y-full");
          arrowIcon.classList.remove("opacity-0");
          arrowIcon.classList.add("opacity-100");
        }, 500);
      }
    });
  },
  { threshold: 0 }
);

observer.observe(arrowSection);
/********* Nav Mob ******** */
const BtnMenu = document.getElementById("btn-menu");
const Menu = document.getElementById("menu");
const Bars = document.querySelector(".bars");
const MobNav = document.querySelector(".mob-nav");
const MobLink = document.querySelectorAll(".mob-link");

BtnMenu.addEventListener("click", () => {
  BtnMenu.classList.toggle("open");
  setTimeout(function () {
    BtnMenu.classList.toggle("bg-work");
    Bars.classList.toggle("-translate-x-4");
    Bars.classList.toggle("translate-x-2");
  }, 1100);
  Menu.classList.toggle("bg-black/60");
  Menu.classList.toggle("backdrop-blur-md");
  Menu.classList.toggle("translate-x-[85%]");
});

MobLink.forEach((link) => {
  link.addEventListener("click", () => {
    BtnMenu.classList.toggle("open");
    setTimeout(function () {
      BtnMenu.classList.toggle("bg-work");
      Bars.classList.toggle("-translate-x-4");
      Bars.classList.toggle("translate-x-2");
    }, 1100);
    Menu.classList.toggle("bg-black/60");
    Menu.classList.toggle("backdrop-blur-md");
    Menu.classList.toggle("translate-x-[85%]");
  });
});
/******* Testimonials *****/
const Arrows = document.querySelector(".arrows");
const Arow = document.querySelectorAll(".arow");
const TestiA = document.querySelector(".testi-a");
const TestiB = document.querySelector(".testi-b");

Arrows.addEventListener("click", () => {
  Arow.forEach((arow) => {
    arow.classList.toggle("text-gray-500");
  });

  TestiA.classList.toggle("-translate-x-full");
  TestiB.classList.toggle("translate-x-[150%]");
});
