// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile)
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}

// Active link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + window.pageYOffset - 120;
    const offsetBottom = offsetTop + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= offsetTop && scrollY < offsetBottom) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    }
  });
}

window.addEventListener("scroll", onScroll);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Fake contact form handler (front-end only)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thanks for reaching out! Hook this form up to a backend or email service when you're ready."
    );
    contactForm.reset();
  });
}
