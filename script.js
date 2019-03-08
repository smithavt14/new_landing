var DOM = {
  menu: document.querySelector('.mobile-navbar-menu-container'),
  hamburger: document.querySelectorAll('.mobile-navbar-icon-line'),
  exit: document.getElementById('exit'),
  mobileNavbar: document.querySelector('.mobile-navbar'),
  mobileLink: document.querySelectorAll('.mobile-navbar-link')
}

var toggleMobileNav = function() {
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

var setupEventListeners = function () {
  DOM.menu.addEventListener('click', function() {
    transformIcon()
    toggleMobileNav()
  })

  for (var i = 0; i < DOM.mobileLink.length; i++) {
    DOM.mobileLink[i].addEventListener('click', function() {
      transformIcon()
      toggleMobileNav()
    })
  }
}

setupEventListeners()

