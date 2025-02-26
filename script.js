/*-------- NAVIGATION BAR FUNCTION -----------*/
function myMenuFunction() {
  document.getElementById("myNavMenu").classList.toggle("responsive");
}

/*-------- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -----------*/
    window.onscroll = function() {headerShadow()};

    function headerShadow(){
        const navHeader =document.getElementById("header");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.Height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }
/*-------- TYPING EFFECT -----------*/
    var typingEffect = new Typed(".typedText",{
        strings : ["Erwann Irouche","IT Student","DevSecOps","SysAdmin"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 2000
    })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})
/* -- HOME -- */
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})
/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
    
    if (link) { // Vérification si le lien existe avant d'ajouter ou retirer la classe
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', function () {
  let elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => {
    let position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.classList.add('active');
    }
  });
});

