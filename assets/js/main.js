/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Change Color Style ===============*/

let colorPalette = document.querySelector('.nav__colors');

colorPalette.addEventListener('click', () => {
  let root = document.querySelector(':root');
  let gcs = getComputedStyle(root);
  let hue = gcs.getPropertyValue('--hue');
  if (hue === '162') {
    console.log(hue);
    root.style.setProperty('--hue', '2');
  } else {
    root.style.setProperty('--hue', '162');
  }
});

/////////////////////////

/*

  if (hue === '162') {
    console.log('true');
    root.style.setProperty('--hue', '22');
  } else {
    console.log('false');
  }

let colorPalette = document.querySelector('.nav__colors');

colorPalette.addEventListener('click', () => {
  let root = document.querySelector(':root');
  let gcs = getComputedStyle(root);
  let hue = gcs.getPropertyValue('--hue');
  console.log(hue);
  root.style.setProperty('--hue', '162');
  if (hue === '162') {
    console.log('true');
    root.style.setProperty('--hue', '22');
  } else {
    console.log('false');
  }
});

*/

/*=============== ADD BLUR TO HEADER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
