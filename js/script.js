const DOM = {
  menu: document.querySelector('.mobile-navbar-menu-container'),
  hamburger: document.querySelectorAll('.mobile-navbar-icon-line'),
  exit: document.getElementById('exit'),
  mobileNavbar: document.querySelector('.mobile-navbar'),
  mobileLink: document.querySelectorAll('.mobile-navbar-link'),
  navbarContainer: document.querySelector('.navbar-container'),
  navbarLogo: document.querySelector('.navbar-move-logo'),
  sections: {
    intro: document.getElementById('intro'),
    activities: document.getElementById('activities'),
    venues: document.getElementById('venues'),
    memberships: document.getElementById('memberships'),
    access: document.getElementById('access')
  },
  links: {
    intro: document.getElementById('introLink'),
    activities: document.getElementById('activitiesLink'),
    venues: document.getElementById('venuesLink'),
    memberships:document.getElementById('membershipsLink'),
    access: document.getElementById('accessLink')
  }
}

const toggleMobileNav = function() {
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

const transformIcon = function() {
  for (var i = 0; i < DOM.hamburger.length; i++) {
    DOM.hamburger[i].classList.toggle('exit')
    DOM.hamburger[i].classList.toggle('hamburger')
  }
}

const navbarBackground = function () {
  if (window.scrollY > window.innerHeight) {
    DOM.navbarContainer.classList.add('navbar-background-white')
    DOM.navbarLogo.classList.add('show')
  } else {
    DOM.navbarContainer.classList.remove('navbar-background-white')
    DOM.navbarLogo.classList.remove('show')
  }
}

const scrollToSection = function () {

  const linksArray = Object.values(DOM.links)
  const sectionsArray = Object.values(DOM.sections)

  function createEventListener(i) {
    linksArray[i].addEventListener('click', function() {
      window.scrollTo({
        top: sectionsArray[i].offsetTop,
        behavior: 'smooth'
      })
    })
  }
  
  for (var i = 0; i < linksArray.length; i++) {
    createEventListener(i)
  }
}

// Our initialization function
const setupEventListeners = function () {
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

