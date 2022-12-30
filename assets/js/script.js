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
const classListPro = function (pro) {
  feacturesUp.classList[pro](classActive);
  companyUp.classList[pro](classActive);
  feacturesDown.classList[pro](classActive);
  companyDown.classList[pro](classActive);
};

const handleClick = function (e) {
  e.preventDefault();
  this.classList.toggle(classActive);
  feacturesUp.classList.toggle(classActive);
  companyUp.classList.toggle(classActive);
  feacturesDown.classList.toggle(classActive);
  companyDown.classList.toggle(classActive);

  outside(this, "click", () => {
    this.classList.remove(classActive);
    feacturesUp.classList.remove(classActive);
    companyUp.classList.remove(classActive);
    feacturesDown.classList.remove(classActive);
    companyDown.classList.remove(classActive);
  });
};

dropDownMenu.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

// Menu Mobile
const openMenu = function () {
  headerList.classList.toggle("active");
  headerBtn.classList.toggle("active");
  headerMenu.classList.toggle("active");
  menuClose.classList.toggle("active");
  overlay.classList.toggle("active");

  outside(headerList, "click", () => {
    headerList.classList.remove("active");
    headerBtn.classList.remove("active");
    headerMenu.classList.remove("active");
    menuClose.classList.remove("active");
    overlay.classList.remove("active");
  });
};

headerMenu.addEventListener("click", openMenu);
