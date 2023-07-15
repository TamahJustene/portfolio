// JavaScript code for the portfolio website

// Back to Top button
window.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close the navigation menu on mobile devices after clicking a link
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggle && navbarCollapse) {
      navbarToggle.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  });
});

// Form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = 'Portfolio Inquiry';
  const body = `Hi, I'm interested in discussing a project.%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage: ${message}`;

  const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
});

// Close the navigation menu on mobile devices after clicking outside the menu
document.addEventListener('click', (e) => {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const targetElement = e.target;
  if (navbarCollapse.classList.contains('show') && !targetElement.classList.contains('navbar-toggler')) {
    navbarCollapse.classList.remove('show');
  }
});
