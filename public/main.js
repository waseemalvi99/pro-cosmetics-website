const navCollapseEl = document.getElementById("mainNav");
let navCollapseInstance = null;

if (navCollapseEl && window.bootstrap && window.bootstrap.Collapse) {
  navCollapseInstance = window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });

  navCollapseEl.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");
    if (clickedLink && window.matchMedia("(max-width: 991.98px)").matches) {
      navCollapseInstance.hide();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navCollapseInstance.hide();
    }
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("in");
  });
} else {
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 4) * 70}ms`;
    revealObserver.observe(el);
  });
}

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
let index = 0;
let timer;

function showSlide(nextIndex) {
  if (!slides.length) {
    return;
  }

  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = nextIndex;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  showSlide((index + 1) % slides.length);
}

function restartSlider() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5600);
}

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    showSlide(dotIndex);
    restartSlider();
  });
});

if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  restartSlider();
}

const heroShell = document.getElementById("hero-shell");
if (heroShell) {
  heroShell.addEventListener("mousemove", (event) => {
    const activeContent = heroShell.querySelector(".slide.active .hero-content");
    if (!activeContent) {
      return;
    }

    const bounds = heroShell.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
    activeContent.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  heroShell.addEventListener("mouseleave", () => {
    const activeContent = heroShell.querySelector(".slide.active .hero-content");
    if (activeContent) {
      activeContent.style.transform = "translate3d(0, 0, 0)";
    }
  });
}

const academyLeftCard = document.querySelector("#academy .col-lg-7 .feature");
const academyStack = document.querySelector("#academy .academy-stack");

function syncAcademyColumns() {
  if (!academyLeftCard || !academyStack) {
    return;
  }

  if (window.matchMedia("(min-width: 992px)").matches) {
    const leftHeight = academyLeftCard.getBoundingClientRect().height;
    academyStack.style.minHeight = `${leftHeight}px`;
    academyStack.style.gridTemplateRows = "1fr 1fr";
  } else {
    academyStack.style.minHeight = "";
    academyStack.style.gridTemplateRows = "";
  }
}

window.addEventListener("load", syncAcademyColumns);
window.addEventListener("resize", syncAcademyColumns);

const academyImage = academyLeftCard ? academyLeftCard.querySelector("img") : null;
if (academyImage) {
  academyImage.addEventListener("load", syncAcademyColumns);
}
