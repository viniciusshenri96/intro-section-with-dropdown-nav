"use strict";

const company = document.querySelector(".nav__link-company");
const features = document.querySelector(".nav__link-features");
const optionsCompany = document.querySelector(".nav__options-company");
const optionsFeatures = document.querySelector(".nav__options-box");

const upDownCompany = function (e) {
  e.preventDefault();
  company.classList.toggle("active");
  optionsCompany.classList.toggle("active");
  if (features.classList.contains("active")) {
    features.classList.remove("active");
    optionsFeatures.classList.remove("active");
  }
};

const upDownFeatures = function (e) {
  e.preventDefault();
  features.classList.toggle("active");
  optionsFeatures.classList.toggle("active");
  if (company.classList.contains("active")) {
    company.classList.remove("active");
    optionsCompany.classList.remove("active");
  }
};

company.addEventListener("click", upDownCompany);
features.addEventListener("click", upDownFeatures);
