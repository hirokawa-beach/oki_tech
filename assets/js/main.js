const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const menuBackdrop = document.querySelector(".menu-backdrop");
const closeTargets = document.querySelectorAll("[data-menu-close]");
const menuLinks = document.querySelectorAll(".site-menu a");

let closeTimer = null;
let lastFocusedElement = null;

const isMenuOpen = () => document.body.dataset.menuOpen === "true";

const setExpandedState = (expanded) => {
  if (!menuToggle) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(expanded));
};

const hideMenu = () => {
  if (!siteMenu || !menuBackdrop) {
    return;
  }

  siteMenu.hidden = true;
  menuBackdrop.hidden = true;
};

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
};

function openMenu() {
  if (!menuToggle || !siteMenu || !menuBackdrop || isMenuOpen()) {
    return;
  }

  clearTimeout(closeTimer);
  lastFocusedElement = document.activeElement;

  siteMenu.hidden = false;
  menuBackdrop.hidden = false;

  requestAnimationFrame(() => {
    document.body.dataset.menuOpen = "true";
    setExpandedState(true);
  });

  const firstLink = siteMenu.querySelector("a");
  firstLink?.focus();
  document.addEventListener("keydown", handleKeydown);
}

function closeMenu() {
  if (!menuToggle || !siteMenu || !menuBackdrop || !isMenuOpen()) {
    return;
  }

  clearTimeout(closeTimer);
  document.body.dataset.menuOpen = "false";
  setExpandedState(false);
  document.removeEventListener("keydown", handleKeydown);

  closeTimer = window.setTimeout(() => {
    hideMenu();

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }, 220);
}

hideMenu();
document.body.dataset.menuOpen = "false";

menuToggle?.addEventListener("click", () => {
  if (isMenuOpen()) {
    closeMenu();
    return;
  }

  openMenu();
});

closeTargets.forEach((target) => {
  target.addEventListener("click", closeMenu);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
