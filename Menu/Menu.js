const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector("div.menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

// close the menu when the user clicks anywhere on the article or form section
const page = document.querySelector(".articles");
const formSection = document.querySelector("form");

page.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

formSection.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});
