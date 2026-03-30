const COOKIE_CONSENT_KEY = "ekymoov_cookie_consent";
const COOKIE_PREFERENCES_KEY = "ekymoov_cookie_preferences";
const EMAILJS_PUBLIC_KEY = "-6pr_1ZZSV3lC6jSy";
const EMAILJS_SERVICE_ID = "service_v460n5p";
const EMAILJS_TEMPLATE_ID = "template_fgbf308";

function setupRevealObserver() {
  const elements = Array.from(document.querySelectorAll(".reveal"));
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function setupActiveNav() {
  const navLinks = Array.from(document.querySelectorAll(".topnav a"));
  if (navLinks.length === 0) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (currentPage === "mentions-legales.html") {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes("#contact")) {
        link.classList.add("is-active");
      }
    });
    return;
  }

  const sectionLinks = navLinks
    .map((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return null;

      const section = document.querySelector(href);
      if (!section) return null;
      return { link, section };
    })
    .filter(Boolean);

  if (sectionLinks.length === 0) return;

  const setActiveLink = (id) => {
    sectionLinks.forEach(({ link, section }) => {
      link.classList.toggle("is-active", `#${section.id}` === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveLink(`#${visibleEntry.target.id}`);
      }
    },
    { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] },
  );

  sectionLinks.forEach(({ section }) => observer.observe(section));
  setActiveLink("#hero");
}

function setupMobileNav() {
  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".topnav");
  if (!topbar || !toggle || !nav) return;

  const navLinks = Array.from(nav.querySelectorAll("a"));

  const closeMenu = () => {
    topbar.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
  };

  const openMenu = () => {
    topbar.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fermer le menu");
  };

  toggle.addEventListener("click", () => {
    if (topbar.classList.contains("menu-open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

function setupModal() {
  const triggers = Array.from(document.querySelectorAll("[data-modal-open]"));
  const modal = document.getElementById("privacy-modal");
  if (!modal || triggers.length === 0) return;

  const closeTargets = Array.from(modal.querySelectorAll("[data-modal-close]"));
  let lastFocusedElement = null;

  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(modal);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openModal = (trigger = null) => {
    lastFocusedElement = trigger || document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeydown);

    const focusable = getFocusableElements(modal);
    focusable[0]?.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);
    lastFocusedElement?.focus?.();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(trigger);
    });
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  if (window.location.hash === "#privacy-modal") {
    openModal();
  }

  return { openModal, closeModal };
}

function setupCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const preferencesPanel = document.getElementById("cookie-preferences");
  const analyticsInput = document.getElementById("cookie-analytics");
  if (!banner) return;

  const actionButtons = Array.from(banner.querySelectorAll("[data-cookie-action]"));
  const manageTriggers = Array.from(document.querySelectorAll("[data-cookie-manage]"));
  const preferenceButtons = Array.from(document.querySelectorAll("[data-cookie-pref-save]"));
  const preferenceClose = document.querySelector("[data-cookie-pref-close]");
  const storedChoice = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  const storedPreferences = window.localStorage.getItem(COOKIE_PREFERENCES_KEY);

  const showBanner = () => {
    banner.hidden = false;
  };

  const hideBanner = () => {
    banner.hidden = true;
  };

  const showPreferences = () => {
    if (!preferencesPanel) return;
    preferencesPanel.hidden = false;
  };

  const hidePreferences = () => {
    if (!preferencesPanel) return;
    preferencesPanel.hidden = true;
  };

  if (analyticsInput && storedPreferences) {
    try {
      const parsed = JSON.parse(storedPreferences);
      analyticsInput.checked = Boolean(parsed.analytics);
    } catch {
      analyticsInput.checked = false;
    }
  }

  if (!storedChoice) {
    showBanner();
  }

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-cookie-action");

      if (action === "preferences") {
        showPreferences();
        return;
      }

      if (action === "accept") {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
      }

      if (action === "reject") {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
      }

      hideBanner();
      hidePreferences();
    });
  });

  preferenceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-cookie-pref-save");
      const preferences = {
        necessary: true,
        analytics: mode === "selected" ? Boolean(analyticsInput?.checked) : false,
      };

      window.localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
      window.localStorage.setItem(COOKIE_CONSENT_KEY, preferences.analytics ? "accepted" : "rejected");
      hidePreferences();
      hideBanner();
    });
  });

  preferenceClose?.addEventListener("click", hidePreferences);

  manageTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      showPreferences();
    });
  });
}

function setupRequestForm() {
  const form = document.querySelector("[data-request-form]");
  if (!form) return;

  const status = form.querySelector("[data-request-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const fields = {
    name: form.querySelector("#request-name"),
    email: form.querySelector("#request-email"),
    profile: form.querySelector("#request-profile"),
    city: form.querySelector("#request-city"),
    message: form.querySelector("#request-message"),
  };

  if (!window.emailjs) {
    if (status) {
      status.textContent = "Le service d'envoi n'est pas disponible pour le moment. Merci d'utiliser l'email direct.";
    }
    return;
  }

  window.emailjs.init(EMAILJS_PUBLIC_KEY);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (status) {
      status.textContent = "Envoi en cours...";
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        nom: fields.name?.value?.trim() || "",
        email: fields.email?.value?.trim() || "",
        profil: fields.profile?.value || "",
        ville: fields.city?.value?.trim() || "",
        besoin: fields.message?.value?.trim() || "",
      });

      form.reset();

      if (status) {
        status.textContent = "Votre demande a bien été envoyée. Nous reviendrons vers vous rapidement.";
      }
    } catch (error) {
      const errorMessage =
        error?.text ||
        error?.message ||
        error?.statusText ||
        "Erreur EmailJS inconnue";

      if (status) {
        status.textContent = `L'envoi a échoué. ${errorMessage}`;
      }
      console.error("EmailJS error:", error);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

function init() {
  setupRevealObserver();
  setupMobileNav();
  setupActiveNav();
  setupModal();
  setupCookieBanner();
  setupRequestForm();
}

document.addEventListener("DOMContentLoaded", init);
