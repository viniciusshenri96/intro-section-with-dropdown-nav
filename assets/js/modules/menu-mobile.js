import outside from "./outsideClick.js";
// Menu Mobile
const headerList = document.querySelector(".header__list");
const headerBtn = document.querySelector(".header__btn");
const headerMenu = document.querySelector("[data-mobilebutton]");
const menuClose = document.querySelector(".menu-close");
const overlay = document.querySelector(".overlay");
const classActive = "active";

const classListProMenuMobile = function (pro) {
  const elements = [headerList, headerBtn, headerMenu, menuClose, overlay];
  elements.forEach((el) => el.classList[pro](classActive));
};

export default function openMenu() {
  classListProMenuMobile("toggle");

  if (!this.classList.contains(classActive))
    return this.setAttribute("aria-expanded", "false");

  this.setAttribute("aria-expanded", "true");

  outside(headerList, () => {
    classListProMenuMobile("remove");
  });
}

headerMenu.addEventListener("click", openMenu);
