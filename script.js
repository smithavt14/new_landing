var DOM = {
  menu: document.querySelector('.mobile-navbar-menu-container'),
  hamburger: document.querySelectorAll('.mobile-navbar-icon-line'),
  exit: document.getElementById('exit'),
  mobileNavbar: document.querySelector('.mobile-navbar')
}

var openMobileNav = function() {
  if (DOM.mobileNavbar.classList.contains('navbar-close')) {
    DOM.mobileNavbar.classList.remove('navbar-close')
    DOM.mobileNavbar.classList.add('navbar-open')
  } else if (DOM.mobileNavbar.classList.contains('navbar-open')) {
    DOM.mobileNavbar.classList.remove('navbar-open')
    DOM.mobileNavbar.classList.add('navbar-close')
  } else {
    DOM.mobileNavbar.classList.add('navbar-open')
  }
}

var transformIcon = function() {
  for (var i = 0; i < DOM.hamburger.length; i++) {
    DOM.hamburger[i].classList.toggle('exit')
    DOM.hamburger[i].classList.toggle('hamburger')
  }
}

DOM.menu.addEventListener('click', transformIcon)


// When user clicks on the hamburger

// 1. All lines converge into the center
// 2. All lines rotate either 45 or -45 deg
// 3. All lines turn white