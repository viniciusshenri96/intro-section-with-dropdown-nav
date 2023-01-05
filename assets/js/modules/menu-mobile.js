import outside from "./outsideClick.js";

export default function menuMobileFunction() {
  const headerList = document.querySelector("[data-menu-list]");
  const headerBtn = document.querySelector("[data-menu-btn]");
  const mobileBtn = document.querySelector("[data-menu-button]");
  const menuClose = document.querySelector("[data-menu-close]");
  const overlay = document.querySelector("[data-menu-overlay]");
  const classActive = "active";

  const classListProMenuMobile = function (pro) {
    const elements = [headerList, headerBtn, mobileBtn, menuClose, overlay];
    elements.forEach((el) => el.classList[pro](classActive));
  };

  function openMenu() {
    classListProMenuMobile("toggle");
    if (!this.classList.contains(classActive))
      return this.setAttribute("aria-expanded", "false");

    this.setAttribute("aria-expanded", "true");

    outside(headerList, () => {
      classListProMenuMobile("remove");
    });
  }

  mobileBtn.addEventListener("click", openMenu);
}
