const hamBtn = document.getElementById("ham-menu");
const linkMobile = document.getElementById("link-mobile-container");
const body = document.querySelector("body");

hamBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  linkMobile.classList.toggle("hidden");
});

body.addEventListener("click", (e) => {
  if (!linkMobile.classList.contains("hidden") && !linkMobile.contains(e.target) && e.target !== hamBtn) {
    linkMobile.classList.add("hidden");
  }
});
