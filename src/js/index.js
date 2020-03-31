const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const viewPlan = document.querySelector(".btn-nav-view-plan");

hamburger.addEventListener("click", () => {
  close.classList.toggle("show");
  open.classList.toggle("hide");
  menu.classList.toggle("show");
  // viewPlan.classList.toggle("btn-bordered--dark");
});
