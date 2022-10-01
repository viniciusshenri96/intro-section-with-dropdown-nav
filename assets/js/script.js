"use strict";

const navList = document.querySelector(".nav__list");
const navImg = document.querySelectorAll(".nav__img");
const navOptions = document.querySelectorAll(".nav__options");

// const navOptions = document.querySelectorAll(".nav__options");

// console.log(navImg);
// console.log(navOptions);

navList.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__list-item");

  // Guard clause
  if (!clicked) return;

  if (clicked.classList.contains("nav__list-item")) {
    const navImg = clicked.querySelectorAll(".nav__img");
    const navOptions = clicked.querySelector(".nav__options");

    const hiddle = function (element) {
      const sibling = clicked[`${element}`].querySelectorAll(".nav__img");

      sibling[0].classList.remove("active");
      sibling[1].classList.add("active");

      clicked[`${element}`]
        .querySelector(".nav__options")
        .classList.add("hidden");
    };
    navImg.forEach((img) => {
      if (img.classList.contains("active")) {
        img.classList.remove("active");
        navOptions.classList.remove("hidden");

        clicked.children[0].innerText === "Features"
          ? hiddle("nextElementSibling")
          : hiddle("previousElementSibling");
      } else {
        img.classList.add("active");
        navOptions.classList.add("hidden");
      }
    });
  }
});
