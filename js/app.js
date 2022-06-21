/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navList = document.getElementById('navbar__list');
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 4; i++) {
	let listItem = document.createElement('li');
	listItem.innerHTML = `<a href="#section${i}" class="menu__link">Section ${i}</a>`;
	fragment.appendChild(listItem);
}
navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
const sections = document.getElementsByClassName('section');
setTimeout(() => {
	document.addEventListener('scroll', () => {
		for (let i of sections) {
			let rect = i.getBoundingClientRect(); // Get the bounds of a section as a dictionary
			let y = rect['y']; // Get the value of y-coordinate of the section
			if (y <= 100 && y >= -100) {
				// check if the section is on the viewport
				i.classList.add('your-active-class');
			} else {
				i.classList.remove('your-active-class');
			}
		}
	});
}, 0);

// Scroll to anchor ID using scrollTO event
const anchors = document.getElementsByClassName('menu__link');
for (let i of anchors) {
	i.addEventListener('click', function (evt) {
		evt.preventDefault(); // prevent the default anchor behavior
		let target = i.getAttribute('href'); // get the targetElement id (the "#" included)
		target = target.substring(1, target.length + 1); // Get rid of the "#"
		let targetElement = document.getElementById(target); // select the target section
		let rect = targetElement.getBoundingClientRect(); // get detect section location relative to the viewport
		let y = rect['y']; // only "y" is the important
		targetElement.scrollIntoView({
			// scroll to section
			top: y,
			left: 0,
			behavior: 'smooth',
		});
	});
}

// For Responsiveness: add a class to demonstrate the navlist by clicking on the menu icon
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', (evt) => {
	evt.preventDefault();
	const navbar = document.getElementsByClassName('navbar__menu');
	navbar[0].classList.toggle('navbar__none');
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
