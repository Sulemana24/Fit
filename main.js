const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-line")

});

navLinks.addEventListener("click", (e)=> {
    navLinks.classList.remove("open");

    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const popup = document.getElementById('newsletterPopup');
    const form = document.getElementById('newsletterForm');

    const isSubscribed = localStorage.getItem('subscribed');

    if (!isSubscribed) {
        setTimeout(() => {
        popup.style.display = 'flex';
    }, 10000); 
    }

    form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const emailInput = form.querySelector('input[name="email"]');

    if (emailInput.value.trim() !== '') {
        localStorage.setItem('subscribed', 'true');
        alert('Thank you for subscribing!');
        popup.style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
    });

    popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
    });

    window.onscroll = function() { scrollFunction() };
    function scrollFunction() {
        document.getElementById("backToTop").style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
    }
    
    function topFunction() {
        document.documentElement.scrollTop = 0;
    }