"use strict";

const btnMenu = document.querySelector(".menu-toggler");
const nav = document.querySelector("nav");
const icons = document.querySelector(".icon-wrapper");
const iconBi = document.querySelector(".bi-list");

btnMenu.addEventListener("click", function () {
  nav.classList.toggle("show");
  icons.classList.toggle("show");
  btnMenu.classList.toggle("rotate");
});

// smooth scrolling implementation
const sections = document.querySelector(".sections");
const btn = document.querySelector(".btn-1");
const section1 = document.querySelector("#section--1");
const header = document.querySelector(".header-nav");
const footer = document.querySelector("footer");

const sectionBtn = document.querySelectorAll("li");
sectionBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    sections.scrollIntoView({ behaviour: "smooth" });
  });
});

const headerHeight = header.getBoundingClientRect().height;

const observer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.remove("header");
    header.classList.add("header-on-scroll");
  } else {
    header.classList.remove("header-on-scroll");
    header.classList.add("header");
  }
};

const sectionObserve = new IntersectionObserver(observer, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
sectionObserve.observe(section1);
const footerYearAuto = function () {
  const date = new Date();
  footer.innerHTML = "";

  const html = `
  <p>
  copyright &copy Backroads travel tours company ${date.getFullYear()}. All Right Reserved
  </p>
  `;
  footer.insertAdjacentHTML("afterbegin", html);
};
footerYearAuto();
