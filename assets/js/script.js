import dropdown from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";

dropdown;
menuMobile;

const body = document.body;
const iconDark = document.querySelector(".icon-sunny");

iconDark.addEventListener("click", function () {
  body.classList.toggle("show");
  iconDark.classList.toggle("show");
});
