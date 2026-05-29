// ── MOBILE NAV ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill bars when they come into view
        const bar = entry.target.querySelector(".skill-bar");
        if (bar) {
          bar.style.width = bar.dataset.width + "%";
        }
      }
    });
  },
  { threshold: 0.15 }
);

// Observe skill cards and project cards
document.querySelectorAll(".skill-card, .project-card, .about-grid").forEach((el) => {
  el.classList.add("fade-up");
  observer.observe(el);
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#2563eb";
    }
  });
});

// ── CONTACT FORM ──
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate sending (replace with real form service like Formspree)
  const submitBtn = contactForm.querySelector("button[type='submit']");
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.style.display = "none";
    formSuccess.style.display = "block";
    contactForm.reset();
  }, 1000);
});
