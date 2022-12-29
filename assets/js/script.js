"use strict";

const dropDownMenus = document.querySelectorAll("[data-dropdown]");
const feacturesUp = document.querySelector(".features__up");
const companyUp = document.querySelector(".company__up");
const feacturesDown = document.querySelector(".features__down");
const companyDown = document.querySelector(".company__down");
console.log(dropDownMenus);

const handleClick = function (e) {
  e.preventDefault();
  this.classList.add("active");
  feacturesUp.classList.add("active");
  companyUp.classList.add("active");
  feacturesDown.classList.add("active");
  companyDown.classList.add("active");

  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("active");
    feacturesUp.classList.remove("active");
    companyUp.classList.remove("active");
    feacturesDown.classList.remove("active");
    companyDown.classList.remove("active");
  });
};

dropDownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  // Só vai acontecer por causa do efeito bubble
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  // element.setAttribute(outside, '')
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        // Removendo o evento de click do html, para ele ocorrer apenas uma vez
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
