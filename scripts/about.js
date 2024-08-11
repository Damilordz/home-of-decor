document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar');
    const navMenu = document.querySelector('.nav-menu');
    const closeNav = document.querySelector('.close-nav');
  
    navBar.addEventListener('click', () => {
      navBar.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    closeNav.addEventListener('click', () => {
      navBar.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });