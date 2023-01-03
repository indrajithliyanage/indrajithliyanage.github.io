/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* VALIDATE IF CONSTANT EXISTS */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // WHEN WE CLICK ON EACH NAV__LINK, WE REMOVE THE SHOW-MENU CLASS
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spacebetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        }
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".testimonial__container", {
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactFormValidation = document.getElementById('contact-form-val')

const sendEmail = (e) => {
    e.preventDefault();

    // CHECK IF THE FIELD HAS A VALUE
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        // ADD AND REMOVE COLOR
        contactFormValidation.classList.remove('color-blue');
        contactFormValidation.classList.add('color-red');
        // SHOW MESSAGE	
        contactFormValidation.textContent = 'Please Fill all the Input Fields! 📩'
    } else {
        // SERVICEID - TEMPLATEID - #FORM - PUBLICKEY
        emailjs.sendForm('service_8ii265v', 'teamplate_85g6ftk', 'contact-form', 'VQaq6RG_bXgUd7BNm').then(() => {
            // SHOW MESSAGE AND ADD COLOR
            contactFormValidation.classList.add('color-blue');
            contactFormValidation.textContent = 'Message Sent! ✅';
            // // REMOVE MESSAGE AFTER FIVE SECONDS
            setTimeout(()=>{
                contactFormValidation.textContent = '';
            }, 5000);
            // SEND ERROR
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })
        // TO CLEAR THE INPUT FIELD
        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
    }   
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // WHEN THE SCROLL IS HIGHER THAN 350 VIEWPORT HEIGHT, ADD THE SHOW-SCROLL CLASS TO THE A TAG WITH THE SCROLLUP CLASS
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// PREVIOUSLY SELECTED TOPIC (IF USER SELECTED)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDATING THE DARK-THEME CLASS
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// WE VALIDATE IF THE USER PREVIOUSLY CHOSE A TOPIC
if (selectedTheme) {
  // IF THE VALIDATION IS FULFILLED, WE ASK WHAT THE ISSUE WAS TO KNOW IF WE ACTIVATED OR DEACTIVATED THE DARK
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// ACTIVATE / DEACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener('click', () => {
    // ADD OR REMOVE THE DARK / ICON THEME
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // WE SAVE THE THEME AND THE CURRENT ICON THAT THE USER CHOSE
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // WHEN THE SCROLL IS GREATER THAN 50 VIEWPORT HEIGHT, ADD THE SCROLL-HEADER CLASS TO THE HEADER TAG
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,    
})

sr.reveal('.home__data, .projects__container, .testimonial__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval:100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card', {interval: 100})
