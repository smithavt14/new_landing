var DOM = {
  menu: document.querySelector('.mobile-navbar-menu-container'),
  hamburger: document.querySelectorAll('.mobile-navbar-icon-line'),
  exit: document.getElementById('exit'),
  mobileNavbar: document.querySelector('.mobile-navbar'),
  mobileLink: document.querySelectorAll('.mobile-navbar-link'),
  navbarContainer: document.querySelector('.navbar-container'),
  navbarLogo: document.querySelector('.navbar-move-logo'),
  activities: document.getElementById('activities'),
  intro: document.getElementById('intro'),
  venues: document.getElementById('venues'),
  memberships: document.getElementById('memberships'),
  access: document.getElementById('access'),
  introLink: document.getElementById('introLink'),
  activitiesLink: document.getElementById('activitiesLink'),
  venuesLink: document.getElementById('venuesLink'),
  membershipsLink:document.getElementById('membershipsLink'),
  accessLink: document.getElementById('accessLink')
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

var navbarBackground = function () {
  if (window.scrollY > window.innerHeight) {
    DOM.navbarContainer.classList.add('navbar-background-white')
    DOM.navbarLogo.classList.add('show')
  } else {
    DOM.navbarContainer.classList.remove('navbar-background-white')
    DOM.navbarLogo.classList.remove('show')
  }
}

var scrollToSection = function () {
  DOM.introLink.addEventListener('click', function() {
    window.scroll({top: DOM.intro.offsetTop + 1, behavior: 'smooth'})
  })
  DOM.activitiesLink.addEventListener('click', function() {
    window.scroll({top: DOM.activities.offsetTop, behavior: 'smooth'})
  })
  DOM.venuesLink.addEventListener('click', function() {
    window.scroll({top: DOM.venues.offsetTop, behavior: 'smooth'})
  })
  DOM.membershipsLink.addEventListener('click', function() {
    window.scroll({top: DOM.memberships.offsetTop, behavior: 'smooth'})
  })
  DOM.accessLink.addEventListener('click', function() {
    window.scroll({top: DOM.access.offsetTop, behavior: 'smooth'})
  })
}

// Our initialize function

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

  window.addEventListener('scroll', function() {
    navbarBackground()
  })

  scrollToSection()
}

setupEventListeners()

