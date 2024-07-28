// Get references to the DOM elements
const navBar = document.getElementById("nav-bar");
const closeNav = document.getElementById("close-nav");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-links a");
const myAccount = document.querySelector(".my-account a");

// Add event listener to open the navigation menu when the navBar is clicked
navBar.addEventListener("click", () => {
  navMenu.classList.add("show-nav");
});

// Add event listener to close the navigation menu when closeNav is clicked
closeNav.addEventListener("click", () => {
  navMenu.classList.remove("show-nav");
});

// Add event listeners to each navigation link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    // Remove 'active-menu' class from all links
    navLinks.forEach((link) => link.classList.remove("active-menu"));
    // Add 'active-menu' class to the clicked link
    navLink.classList.add("active-menu");
  });
});

// Add event listener to myAccount link
myAccount.addEventListener("click", () => {
  // Remove 'active-menu' class from all links
  navLinks.forEach((link) => link.classList.remove("active-menu"));
});
