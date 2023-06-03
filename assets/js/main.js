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

/*=============== Change Color Style =============== */

const root = document.querySelector(':root');
const gcs = getComputedStyle(root);
const hue = gcs.getPropertyValue('--hue');
const firstColor = gcs.getPropertyValue('--first-color');
const colorPalette = document.querySelector('.nav__colors');
const homeTitle = document.querySelector('.home__title');

/* Adding color mode sound */
const colorSound = new Audio('/assets/sound/color.mp3');
colorSound.volume = 0.32;
const defaultColorSound = new Audio('/assets/sound/default-color.mp3');
defaultColorSound.volume = 0.32;

console.log(hue);

colorPalette.addEventListener('click', () => {
  defaultColorSound.play();
  root.style.removeProperty('--hue');
  root.style.removeProperty('--first-color');
  root.style.removeProperty('--container-color');
  root.style.removeProperty('--first-color-alt');
  homeTitle.style.removeProperty('color');
});

// BBL

/* Change number color */

const bbl = document.querySelector('.bbl');

bbl.addEventListener('click', () => {
  colorSound.play();
  root.style.setProperty('--hue', '250');
  root.style.setProperty('--first-color', 'hsl(250, 100%, 75%)');
  root.style.setProperty('--first-color-alt', 'hsl(267, 51%, 59%)');
  homeTitle.style.setProperty('color', 'yellow');
  root.style.setProperty('--container-color', 'hsl(267, 47%, 24%');
});

// FF

const ff = document.querySelector('.ff');

ff.addEventListener('click', () => {
  colorSound.play();
  root.style.setProperty('--hue', '193');
  root.style.setProperty('--first-color', 'hsla(193, 82%, 52%, 1)');
  root.style.setProperty('--first-color-alt', 'hsla(192, 63%, 41%, 1)');
  homeTitle.style.setProperty('color', 'hsla(193, 82%, 52%, 1)');
  root.style.setProperty('--container-color', 'hsla(196, 85%, 32%, 1)');
});

/* Change container color */

/*

const colorPalette = document.querySelector('.nav__colors');

colorPalette.addEventListener('click', () => {
  const root = document.querySelector(':root');
  const gcs = getComputedStyle(root);
  const hue = gcs.getPropertyValue('--hue');
  const firstColor = gcs.getPropertyValue('--first-color');
  if (hue === '162') {
    console.log(hue);
    root.style.setProperty('--hue', '250');
    root.style.setProperty('--first-color', 'hsl(250, 100%, 75%)');
  } else {
    root.style.setProperty('--hue', '162');
    root.style.setProperty('--hue', 'hsl(162, 100%, 40%)');
  }
});

*/
/////////////////////////

/*=============== ADD BLUR TO HEADER ===============*/

// pageYOffset = scrollY, but it's better to use pageYOffset because of the browsercompatibility

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.scrollY >= 50) {
    console.log('header is blur now');
  }
});

const blurHeader = () => {
  const header = document.getElementById('header');

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  // this, it can be also equal to window, they are all same
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

class Person {
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }
  greet = () => {
    console.log(`My name is ${this.name}, and I'm ${this.age} years old.`);
  };
}

const newPerson = new Person('Ali Yasin', 22);
newPerson.greet();

/*

class Person {
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }

  greet() {
    console.log(`My name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

const newPerson = new Person();
newPerson.personInfo('Ali Yasin', 22);
newPerson.greet();

*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_xux9urk',
      'template_4utuvui',
      '#contact-form',
      'I40pXLEvrREhdkbJ9'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';
        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        // Clear input fields
        contactForm.reset();
      },

      () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
      }
    );
};
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const headerHeight = gcs.getPropertyValue('--header-height');
    console.log(headerHeight); // 3.5rem
    const hh1 = parseFloat(headerHeight) * 16;

    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - hh1,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );
    //
    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? sectionsClass.classList.add('active-link')
      : sectionsClass.classList.remove('active-link');
  });
};
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
});

sr.reveal(`.home__data, .home__social, .footer__container`);
sr.reveal(`.home__image`, { origin: 'bottom' });
sr.reveal(`.about__data, .skills__data`, { origin: 'left' });
sr.reveal(`.about__image, .skills__content`, { origin: 'right' });
sr.reveal(`.services__card, .projects__card`, { interval: '100' });

/* 

1-) 3.5 rem ---> 3.5 sayısını al, yani sadece Number olanı al.
2-) Dönen sayıyı 16 ile çarp.

const headerHeight = gcs.getPropertyValue('--header-height');
console.log(headerHeight); // 3.5rem
const hh1 = parseFloat(headerHeight) * 16;

*/
