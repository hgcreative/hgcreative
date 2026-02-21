window.addEventListener('scroll', () => {
    console.log("scrolling");
const scrollY = window.scrollY;
const heroImage = document.querySelector('.heroimage');

const speed = 0.3;
heroImage.style.transform = `translateY(${-scrollY * speed}px)`;

});

function toggleNav() {
    document.querySelector(".topnav").classList.toggle("responsive");
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



window.addEventListener('scroll', function () {
const image = document.querySelector('.parallax-image');
const scrollTop = window.pageYOffset;
image.style.transform = `translateY(${scrollTop * 0.5}px)`;
});

window.addEventListener('scroll', function () {
    const image = document.querySelector('.about-quote-image img');
    const scrollTop = window.pageYOffset;
    image.style.transform = `translateY(${scrollTop * 0.1}px)`;
    });

    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('.brandpackage');
            const content = section.querySelector('.package-content');
            const expanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', !expanded);
            button.textContent = expanded ? '+' : "-";
            content.classList.toggle('open');
        });
    });


    const audio = document.getElementById('hero-audio');
    const toggle = document.getElementById('music-toggle');

    toggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggle.classList.add('active');
            
        } else {
            audio.pause();
            toggle.classList.remove('active')
        }
    })


    
    // ScrollTrigger Plugin
    
    gsap.registerPlugin(ScrollTrigger);