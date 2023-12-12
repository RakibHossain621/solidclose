const gearButton = document.querySelector(".gear-tab");
const menuButton = document.querySelector(".hamburger_menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const close_button = document.querySelector(".close_button");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

gearButton.addEventListener("click", myFunction);

function myFunction() {
  var element = document.body;

  if (element.classList.contains("dark-mode")) {
    element.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  } else {
    element.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
}

function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  enableScroll();
}

menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  disableScroll();
});

close_button.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
