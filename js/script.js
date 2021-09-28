// SHOW MENU
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId);
   const nav = document.getElementById(navId);

   if (toggle && nav) {
      toggle.addEventListener("click", () => {
         if (this.scrollY >= 200) nav.classList.add("scroll-header");
         else nav.classList.remove("scroll-header");
         nav.classList.toggle("show-menu");
      });
   }
};
showMenu("nav-toggle", "nav-menu");

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
   const navMenu = document.getElementById("nav-menu");
   navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
      } else {
         document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
      }
   });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
   const nav = document.getElementById("header");
   // when the scroll is greater than 200 vh
   if (this.scrollY >= 200) nav.classList.add("scroll-header");
   else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
   const scroll = document.getElementById("scroll-top");
   // when the scroll is greater than 560 vh
   if (this.scrollY >= 560) scroll.classList.add("scroll-top");
   else scroll.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);

// DARK LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const darkIcon = "bx-sun";

// previously selected topic if user selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// cek body
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(darkIcon) ? "bx-moon" : "bx-sun");

if (selectedTheme) {
   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
   themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](darkIcon);
}
// activated manually darklight button
themeButton.addEventListener("click", () => {
   themeButton.classList.toggle(darkIcon);
   document.body.classList.toggle(darkTheme);

   localStorage.setItem("selected-theme", getCurrentTheme());
   localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
   origin: "top",
   distance: "30px",
   duration: 2000,
   reset: true,
});

sr.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button`, {
   interval: 200,
});
