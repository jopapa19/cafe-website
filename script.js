// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for contacting us, ' + form.name.value + '! We will reply soon.');
    form.reset(); // clear the form
});

// Dynamic greeting in Home section
const homeSection = document.getElementById('home');
const greeting = document.createElement('p');

const hours = new Date().getHours();
if(hours < 12){
    greeting.textContent = "Good Morning! Enjoy your coffee ☕";
} else if(hours < 18){
    greeting.textContent = "Good Afternoon! Treat yourself 🍰";
} else {
    greeting.textContent = "Good Evening! Relax with a warm drink 🌙";
}

homeSection.appendChild(greeting);
