const gearButton = document.querySelector(".gear-tab");

gearButton.addEventListener("click", myFunction);

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
