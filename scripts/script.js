// Get references to the DOM elements
const navBar = document.getElementById("nav-bar");
const closeNav = document.getElementById("close-nav");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-links a");
const myAccount = document.querySelector(".my-account a");
const loginRef = document.getElementById("login-ref");
const profileRef = document.getElementById("profile-ref");
const signInBtn = document.getElementById("sign-in-btn");
const signInForm = document.getElementById("sign-in-form");

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

loginRef.addEventListener("click", () => {
  window.location.href = "../html/sign-in.html";
});

profileRef.addEventListener("click", () => {
  window.location.href = "../html/profile.html";
});

// hoverable section (homepage)
document.addEventListener("DOMContentLoaded", function () {
  const hoverSections = [
    { section: ".luxury-1a", overlay: ".luxury-1a-over" },
    { section: ".center-table", overlay: ".table-over" },
    { section: ".textile", overlay: ".textile-over" },
  ];

  hoverSections.forEach((item) => {
    const sectionElement = document.querySelector(item.section);
    const overlayElement = document.querySelector(item.overlay);

    if (sectionElement && overlayElement) {
      sectionElement.addEventListener("mouseenter", () => {
        overlayElement.style.display = "flex";
      });

      sectionElement.addEventListener("mouseleave", () => {
        overlayElement.style.display = "none";
      });
    }
  });
});

// trending products (homepage)
document.addEventListener("DOMContentLoaded", function () {
  const roomLinks = document.querySelectorAll(".sample-rooms li a");
  const productSections = document.querySelectorAll(
    ".trending-products-class-all"
  );

  roomLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove 'active' class from all links
      roomLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");

      // Hide all product sections
      productSections.forEach((section) => section.classList.add("trend-hide"));

      // Show the corresponding product section
      productSections[index].classList.remove("trend-hide");
    });
  });
});

// FAQ section in the (homepage)
document.addEventListener("DOMContentLoaded", function () {
  // Select all the comment link sub images
  const commentLinkSubImages = document.querySelectorAll(
    ".comment-link-sub img"
  );

  commentLinkSubImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Get the corresponding java-hide section
      const javaHideSection =
        img.closest(".comment-link-sub").nextElementSibling;
      if (javaHideSection.classList.contains("java-hide")) {
        // Hide all java-hide sections first
        document.querySelectorAll(".java-hide").forEach((section) => {
          section.style.display = "none";
        });
        // Toggle the display of the java-hide section
        javaHideSection.style.display = "block";
      }
    });
  });

  // Creator content (homepage)
  document.querySelectorAll(".image-content-1").forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.querySelector(".creator-sub").style.display = "flex";
    });
    item.addEventListener("mouseout", () => {
      item.querySelector(".creator-sub").style.display = "none";
    });
  });

  // Add event listeners to the cancel images to hide the client comment when clicked
  const cancelImages = document.querySelectorAll(
    ".client-comment--display .comment-display img"
  );
  cancelImages.forEach((img) => {
    img.addEventListener("click", () => {
      const clientComment = img.closest(".client-comment--display");
      const javaHideSection = clientComment.closest(".java-hide");
      javaHideSection.style.display = "none";
    });
  });
});
