import outside from "./modules/outsideClick.js";

// Selecting element for dropdown menu
const dropDownMenu = document.querySelectorAll("[data-dropdown]");
const feacturesUp = document.querySelector(".features__up");
const companyUp = document.querySelector(".company__up");
const feacturesDown = document.querySelector(".features__down");
const companyDown = document.querySelector(".company__down");

// Selecting element for mobine
const headerList = document.querySelector(".header__list");
const headerBtn = document.querySelector(".header__btn");
const headerMenu = document.querySelector(".header__menu");
const menuClose = document.querySelector(".menu-close");
const overlay = document.querySelector(".overlay");

// Dropdown menu
const classActive = "active";
const classListProDropdown = function (pro) {
  feacturesUp.classList[pro](classActive);
  companyUp.classList[pro](classActive);
  feacturesDown.classList[pro](classActive);
  companyDown.classList[pro](classActive);
};

const handleClick = function (e) {
  e.preventDefault();
  this.classList.add(classActive);
  classListProDropdown("add");

  outside(this, "click", () => {
    this.classList.remove(classActive);
    classListProDropdown("remove");
  });
};

dropDownMenu.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

// Menu Mobile

const classListProMenuMobile = function (pro) {
  headerList.classList[pro](classActive);
  headerBtn.classList[pro](classActive);
  headerMenu.classList[pro](classActive);
  menuClose.classList[pro](classActive);
  overlay.classList[pro](classActive);
};

const openMenu = function () {
  classListProMenuMobile("add");

  outside(headerList, "click", () => {
    classListProMenuMobile("remove");
  });
};

headerMenu.addEventListener("click", openMenu);
