/*SIDEN LOADES*/
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger");
  const menuLinks = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    menuLinks.classList.toggle("show");
  });
});

// Luk menuen, når der klikkes udenfor
document.addEventListener("click", function (event) {
  if (!event.target.matches(".burger") && !event.target.matches(".menu") && menuLinks.classList.contains("show")) {
    menuLinks.classList.remove("show");
  }
});

// Undgå at lukke menuen, når der klikkes indeni den
menuLinks.addEventListener("click", function (event) {
  event.stopPropagation();
});
