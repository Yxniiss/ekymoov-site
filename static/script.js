const gallery = {
  problem:
    "https://images.pexels.com/photos/13840334/pexels-photo-13840334.jpeg?auto=compress&cs=tinysrgb&w=1200",
  solution:
    "https://images.pexels.com/photos/6331229/pexels-photo-6331229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  mission:
    "https://images.pexels.com/photos/17486363/pexels-photo-17486363.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const problems = [
  { value: "1 Francais sur 6", label: "est concerne par une situation de handicap en France." },
  { value: "Des trajets incertains", label: "quand l'offre adaptee est difficile a trouver ou indisponible au bon moment." },
  { value: "Une autonomie freinee", label: "pour aller a un rendez-vous, travailler, etudier ou simplement sortir." },
];

const solutionFeatures = [
  { icon: "booking", title: "Reservation simple", description: "Recherchez et reservez un trajet adapte depuis l'application mobile en quelques gestes." },
  { icon: "driver", title: "Chauffeurs formes", description: "Ekymoov connecte les utilisateurs avec des chauffeurs sensibilises aux besoins PMR." },
  { icon: "vehicle", title: "Vehicules adaptes", description: "Une offre pensee pour accueillir la mobilite reduite dans de meilleures conditions de confort." },
  { icon: "live", title: "Disponibilite en temps reel", description: "Consultez les disponibilites avant le depart pour reduire l'incertitude et mieux anticiper." },
];

const steps = [
  { number: "01", title: "Telechargez l'application", description: "Installez Ekymoov et accedez a une interface mobile claire, lisible et rassurante." },
  { number: "02", title: "Creez votre profil", description: "Renseignez vos besoins pour recevoir une experience plus adaptee a votre mobilite." },
  { number: "03", title: "Reservez votre trajet", description: "Choisissez votre horaire, verifiez la disponibilite et confirmez votre course depuis l'app." },
  { number: "04", title: "Voyagez en confiance", description: "Un chauffeur forme et un vehicule adapte facilitent le trajet du depart a l'arrivee." },
];

const missionPoints = [
  "Rendre les deplacements plus simples pour les personnes a mobilite reduite.",
  "Creer un service mobile utile, humain et fiable au quotidien.",
  "Reunir utilisateurs, chauffeurs et partenaires autour d'une mobilite plus inclusive.",
];

function getFeatureIcon(type) {
  const icons = {
    booking: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3V6M17 3V6M4 9H20M6 5H18C19.1 5 20 5.9 20 7V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V7C4 5.9 4.9 5 6 5Z"/><path d="M9 13H15M9 17H13"/></svg>`,
    driver: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12C14.2 12 16 10.2 16 8C16 5.8 14.2 4 12 4C9.8 4 8 5.8 8 8C8 10.2 9.8 12 12 12Z"/><path d="M5 20C5.8 16.9 8.5 15 12 15C15.5 15 18.2 16.9 19 20"/><path d="M17 13L19 15L22 12"/></svg>`,
    vehicle: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16L6.4 11.5C6.7 10.6 7.5 10 8.4 10H15.6C16.5 10 17.3 10.6 17.6 11.5L19 16"/><path d="M4 16H20V18C20 18.6 19.6 19 19 19H18C17.4 19 17 18.6 17 18V17H7V18C7 18.6 6.6 19 6 19H5C4.4 19 4 18.6 4 18V16Z"/><path d="M7 13H17"/><circle cx="7.5" cy="16.5" r="1"/><circle cx="16.5" cy="16.5" r="1"/></svg>`,
    live: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12H6.5C8.6 12 10.5 13.9 10.5 16V18"/><path d="M19 12H17.5C15.4 12 13.5 13.9 13.5 16V18"/><path d="M12 20V16"/><path d="M12 4C14.761 4 17 6.239 17 9C17 11.761 14.761 14 12 14C9.239 14 7 11.761 7 9C7 6.239 9.239 4 12 4Z"/></svg>`,
  };
  return icons[type] || "";
}

function renderProblemCards() {
  const container = document.getElementById("problem-grid");
  if (!container) return;
  container.innerHTML = problems
    .map(
      (problem) => `
      <article class="problem-card reveal">
        <strong>${problem.value}</strong>
        <p>${problem.label}</p>
      </article>
    `,
    )
    .join("");
}

function renderSolutionFeatures() {
  const container = document.getElementById("feature-grid");
  if (!container) return;
  container.innerHTML = solutionFeatures
    .map((feature, index) => {
      const indexText = String(index + 1).padStart(2, "0");
      return `
      <article class="feature-card reveal">
        <div class="feature-topline">
          <div class="feature-icon">${getFeatureIcon(feature.icon)}</div>
          <span class="feature-index">${indexText}</span>
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `;
    })
    .join("");
}

function renderSteps() {
  const container = document.getElementById("steps-grid");
  if (!container) return;
  container.innerHTML = steps
    .map(
      (step) => `
      <article class="step-card reveal">
        <span class="step-number">${step.number}</span>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderMissionList() {
  const container = document.getElementById("mission-list");
  if (!container) return;
  container.innerHTML = missionPoints
    .map(
      (item) => `
      <div class="value-item reveal">
        <span class="value-check" aria-hidden="true">+</span>
        <p>${item}</p>
      </div>
    `,
    )
    .join("");
}

function hydrateImages() {
  const p = document.getElementById("problem-img");
  const s = document.getElementById("solution-img");
  const m = document.getElementById("mission-img");
  if (p) p.src = gallery.problem;
  if (s) s.src = gallery.solution;
  if (m) m.src = gallery.mission;
}

function setupRevealObserver() {
  const elements = Array.from(document.querySelectorAll(".reveal"));
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

function init() {
  renderProblemCards();
  renderSolutionFeatures();
  renderSteps();
  renderMissionList();
  hydrateImages();
  setupRevealObserver();
}

document.addEventListener("DOMContentLoaded", init);
