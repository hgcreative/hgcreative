window.addEventListener('scroll', () => {
const scrollY = window.scrollY;
const heroHeight= document.querySelector('.hero-section').offsetHeight;

if (scrollY > heroHeight - 50) {
    document.body.classList.add('scrolled');
} else {
    document.body.classList.remove('scrolled');

}

});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".topnav");
    nav.classList.toggle("scrolled", window.scrollY > 10);
});

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
