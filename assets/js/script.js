let openBtn = document.querySelector(".nav-icon");
let closeBtn = document.querySelector(".nav-icon2");
let nav = document.querySelector(".man-links");
openBtn.onclick = () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  nav.style.left = "0%";
};
closeBtn.onclick = () => {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  nav.style.left = "-100%";
};
