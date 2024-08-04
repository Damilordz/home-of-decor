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

// product-page js

const badgeHeart = document.querySelectorAll(".card-item");

badgeHeart.forEach((item) => {
  const liked = item.querySelector(".heart");

  liked.addEventListener("click", () => {
    liked.classList.remove("fa-regular");
    liked.classList.add("fa-solid");

    liked.classList.toggle("liked");
  });
});

// sidebar js
document.addEventListener("DOMContentLoaded", function () {
  // Get all filter heading elements
  const filterHeadings = document.querySelectorAll(".filter_heading");

  // Iterate over each filter heading
  filterHeadings.forEach(function (filterHeading) {
    // Find the associated list and icon within the current filter heading
    const filterList = filterHeading.nextElementSibling;
    const toggleIcon = filterHeading.querySelector(".toggle-icon");

    // Set up the click event listener for each heading
    filterHeading.addEventListener("click", function () {
      // Toggle the display of the list
      if (
        filterList.style.display === "none" ||
        filterList.style.display === ""
      ) {
        filterList.style.display = "flex";
        toggleIcon.classList.add("active");
      } else {
        filterList.style.display = "none";
        toggleIcon.classList.remove("active");
      }
    });
  });
});
