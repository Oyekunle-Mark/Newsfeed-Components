const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // if (menu.classList.contains("menu--open")) {
  //   menu.classList.toggle("menu--open");
  //   menu.classList.add("slide-out");
  // }
  menu.style.display = 'block';

  menu.classList.toggle("menu--open");
  // menu.classList.toggle('slide-out')
  // menu.classList.toggle('menu')

  // page.addEventListener('click', toggleMenu);
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('div.menu');
menu.style.display = 'none';
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// close the menu when the user clicks anywhere on the page
const page = document.querySelector('.articles');
page.addEventListener('click', (e) => {
  menu.classList.remove("menu--open");
});
