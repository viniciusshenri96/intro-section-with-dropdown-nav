"use strict";

const company = document.querySelector(".nav__link-company");
const features = document.querySelector(".nav__link-features");
const optionsCompany = document.querySelector(".nav__options-company");
const optionsFeatures = document.querySelector(".nav__options-box");
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const eventAdd = "click";
const classAct = "active";

const upDownCompany = function (e) {
  e.preventDefault();
  company.classList.toggle("active");
  optionsCompany.classList.toggle("active");
  if (features.classList.contains("active")) {
    features.classList.remove("active");
    optionsFeatures.classList.remove("active");
  }

  outsideClick(company, eventAdd, () => {
    company.classList.remove(classAct);
    optionsCompany.classList.remove(classAct);
  });
};

const upDownFeatures = function (e) {
  e.preventDefault();
  features.classList.toggle("active");
  optionsFeatures.classList.toggle("active");
  if (company.classList.contains("active")) {
    company.classList.remove("active");
    optionsCompany.classList.remove("active");
  }

  outsideClick(features, eventAdd, () => {
    features.classList.remove(classAct);
    optionsFeatures.classList.remove(classAct);
  });
};

company.addEventListener("click", upDownCompany);
features.addEventListener("click", upDownFeatures);

menuBtn.addEventListener("click", function () {
  nav.classList.add("active");
  menuBtn.classList.add("active");
  closeBtn.classList.add("active");
  overlay.classList.add("active");

  outsideClick(nav, eventAdd, () => {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    overlay.classList.remove("active");
  });
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("active");
  menuBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  overlay.classList.remove("active");
});

function outsideClick(element, eventAdd, callback) {
  const html = document.querySelector("html");
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener(eventAdd, handleOutsideClick));
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(eventAdd, handleOutsideClick);
      callback();
    }
  }
}
