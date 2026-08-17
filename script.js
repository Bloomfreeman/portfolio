
// ============================================
// TERMINAL DEVELOPER PORTFOLIO
// Edit the HTML/CSS content to customize your site.
// ============================================

// ---------- Typing effect ----------
const typedText = document.getElementById("typedText");

const phrases = [
  "Computer Science Graduate",
  "Problem Solver",
  "Skilled",
  "Dedicated",
  "Creative"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    typedText.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1700);
      return;
    }
  } else {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 80);
}

typeEffect();


// ---------- Mobile navigation ----------
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// ---------- Scroll reveal ----------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));


// ---------- Active navigation ----------
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));

        const active = document.querySelector(
          `.nav a[href="#${entry.target.id}"]`
        );

        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach(section => sectionObserver.observe(section));


// ---------- Contact form ----------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const EMAILJS_CONFIG = {
  serviceId: "service_oa3dwx8",
  templateId: "template_zgqc37a",
  publicKey: "6-LGRyB6BbX18KSIN"
};

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "> Please fill in all fields before sending.";
      formMessage.style.color = "#ff7b7b";
      return;
    }

    if (
      EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID" ||
      EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY"
    ) {
      formMessage.textContent = "> EmailJS is not configured yet. Add your service, template, and public key in script.js.";
      formMessage.style.color = "#ffcb6b";
      return;
    }

    if (!window.emailjs) {
      formMessage.textContent = "> EmailJS failed to load. Check your internet connection and script setup.";
      formMessage.style.color = "#ff7b7b";
      return;
    }

    formMessage.textContent = `> Sending message to ${name}...`;
    formMessage.style.color = "#d6d6d6";

    try {
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        from_name: name,
        name: name,
        email: email,
        reply_to: email,
        message: message
      });

      formMessage.textContent = `> Thanks ${name}! Your message has been sent successfully.`;
      formMessage.style.color = "#55f58a";
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS send error:", error);
      formMessage.textContent = "> Something went wrong while sending your message. Please try again or email me directly.";
      formMessage.style.color = "#ff7b7b";
    }
  });
}


// ---------- Current year ----------
document.getElementById("year").textContent = new Date().getFullYear();


// ---------- Small terminal command animation ----------
const command = document.querySelector(".typing-command");

if (command) {
  const commandText = "npm run create";
  let i = 0;

  function animateCommand() {
    command.textContent = commandText.substring(0, i);
    i++;

    if (i <= commandText.length) {
      setTimeout(animateCommand, 90);
    } else {
      setTimeout(() => {
        i = 0;
        animateCommand();
      }, 3500);
    }
  }

  animateCommand();
}
