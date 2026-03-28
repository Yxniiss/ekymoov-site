import { useEffect } from "react";
import ekymoovLogo from "./assets/ekymoov-logo.svg";

const gallery = {
  problem:
    "https://images.pexels.com/photos/13840334/pexels-photo-13840334.jpeg?auto=compress&cs=tinysrgb&w=1200",
  solution:
    "https://images.pexels.com/photos/6331229/pexels-photo-6331229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  mission:
    "https://images.pexels.com/photos/17486363/pexels-photo-17486363.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const problems = [
  {
    value: "1 Francais sur 6",
    label: "est concerne par une situation de handicap en France.",
  },
  {
    value: "Des trajets incertains",
    label: "quand l'offre adaptee est difficile a trouver ou indisponible au bon moment.",
  },
  {
    value: "Une autonomie freinee",
    label: "pour aller a un rendez-vous, travailler, etudier ou simplement sortir.",
  },
];

const solutionFeatures = [
  {
    icon: "booking",
    title: "Reservation simple",
    description:
      "Recherchez et reservez un trajet adapte depuis l'application mobile en quelques gestes.",
  },
  {
    icon: "driver",
    title: "Chauffeurs formes",
    description:
      "Ekymoov connecte les utilisateurs avec des chauffeurs sensibilises aux besoins PMR.",
  },
  {
    icon: "vehicle",
    title: "Vehicules adaptes",
    description:
      "Une offre pensee pour accueillir la mobilite reduite dans de meilleures conditions de confort.",
  },
  {
    icon: "live",
    title: "Disponibilite en temps reel",
    description:
      "Consultez les disponibilites avant le depart pour reduire l'incertitude et mieux anticiper.",
  },
];

const steps = [
  {
    number: "01",
    title: "Telechargez l'application",
    description:
      "Installez Ekymoov et accedez a une interface mobile claire, lisible et rassurante.",
  },
  {
    number: "02",
    title: "Creez votre profil",
    description:
      "Renseignez vos besoins pour recevoir une experience plus adaptee a votre mobilite.",
  },
  {
    number: "03",
    title: "Reservez votre trajet",
    description:
      "Choisissez votre horaire, verifiez la disponibilite et confirmez votre course depuis l'app.",
  },
  {
    number: "04",
    title: "Voyagez en confiance",
    description:
      "Un chauffeur forme et un vehicule adapte facilitent le trajet du depart a l'arrivee.",
  },
];

const missionPoints = [
  "Rendre les deplacements plus simples pour les personnes a mobilite reduite.",
  "Creer un service mobile utile, humain et fiable au quotidien.",
  "Reunir utilisateurs, chauffeurs et partenaires autour d'une mobilite plus inclusive.",
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup-compact" : ""}`}>
      <img className="brand-logo-image" src={ekymoovLogo} alt="Ekymoov" />
    </span>
  );
}

function Icon({ type }: { type: string }) {
  switch (type) {
    case "booking":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3V6M17 3V6M4 9H20M6 5H18C19.1 5 20 5.9 20 7V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V7C4 5.9 4.9 5 6 5Z" />
          <path d="M9 13H15M9 17H13" />
        </svg>
      );
    case "driver":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12C14.2 12 16 10.2 16 8C16 5.8 14.2 4 12 4C9.8 4 8 5.8 8 8C8 10.2 9.8 12 12 12Z" />
          <path d="M5 20C5.8 16.9 8.5 15 12 15C15.5 15 18.2 16.9 19 20" />
          <path d="M17 13L19 15L22 12" />
        </svg>
      );
    case "vehicle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16L6.4 11.5C6.7 10.6 7.5 10 8.4 10H15.6C16.5 10 17.3 10.6 17.6 11.5L19 16" />
          <path d="M4 16H20V18C20 18.6 19.6 19 19 19H18C17.4 19 17 18.6 17 18V17H7V18C7 18.6 6.6 19 6 19H5C4.4 19 4 18.6 4 18V16Z" />
          <path d="M7 13H17" />
          <circle cx="7.5" cy="16.5" r="1" />
          <circle cx="16.5" cy="16.5" r="1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12H20" />
          <path d="M12 4V20" />
          <path d="M7 7L17 17" />
        </svg>
      );
  }
}

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
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
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Ekymoov home">
          <Brand />
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#problem">Constat</a>
          <a href="#solution">Solution</a>
          <a href="#how-it-works">Parcours</a>
          <a href="#mission">Mission</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-secondary topbar-cta" href="#cta">
          Rejoindre le projet
        </a>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy reveal">
            <span className="eyebrow">Application mobile PMR-first</span>
            <h1>Une app pour reserver des trajets adaptes avec plus de confiance.</h1>
            <p className="hero-text">
              Ekymoov est une application mobile dediee aux personnes a mobilite
              reduite. Elle simplifie la reservation de trajets avec des chauffeurs
              formes et des vehicules adaptes, dans une experience moderne, lisible
              et rassurante.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#cta">
                Telecharger l'app
              </a>
              <a className="button button-ghost" href="#solution">
                Voir comment ca marche
              </a>
            </div>

            <div className="hero-metrics" aria-label="Ekymoov highlights">
              <div className="metric-card">
                <strong>100% mobile</strong>
                <span>Un parcours pense d'abord pour l'usage sur smartphone.</span>
              </div>
              <div className="metric-card">
                <strong>PMR-first</strong>
                <span>Accessibilite, clarte et disponibilite au coeur du produit.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <div className="mockup-window">
              <div className="mockup-toolbar">
                <span />
                <span />
                <span />
              </div>

              <div className="mockup-content">
                <div className="mockup-phone">
                  <div className="mockup-phone-screen">
                    <div className="mockup-phone-top">
                      <span>9:41</span>
                      <div className="mockup-phone-status">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="mockup-header-card">
                      <div className="mockup-header-top">
                        <Brand compact />
                        <span className="mockup-live-chip">Disponible</span>
                      </div>

                      <div className="mockup-segmented">
                        <span className="active">Aller</span>
                        <span>Retour</span>
                      </div>
                    </div>

                    <div className="mockup-route-card">
                      <div className="mockup-route-line">
                        <span className="pickup" />
                        <span />
                        <span className="dropoff" />
                      </div>
                      <div className="mockup-route-copy">
                        <strong>Hopital Saint-Louis</strong>
                        <span>Depart 13:45, arrivee estimee a 14 min</span>
                      </div>
                    </div>

                    <div className="mockup-map-card">
                      <div className="mockup-map-grid" />
                      <div className="mockup-map-pin pin-a" />
                      <div className="mockup-map-pin pin-b" />
                      <div className="mockup-map-path" />
                      <div className="mockup-map-overlay">
                        <strong>Chauffeur a 4 min</strong>
                        <span>Vehicule PMR confirme</span>
                      </div>
                    </div>

                    <div className="mockup-driver-card">
                      <div className="mockup-driver-avatar">M</div>
                      <div className="mockup-driver-copy">
                        <strong>Malik B.</strong>
                        <span>Chauffeur forme PMR, 4.9/5</span>
                      </div>
                      <div className="mockup-driver-badge">Confirme</div>
                    </div>

                    <div className="mockup-card-grid">
                      <div className="mockup-info-card">
                        <span>Vehicule</span>
                        <strong>Rampe adaptee</strong>
                      </div>
                      <div className="mockup-info-card">
                        <span>Suivi</span>
                        <strong>Temps reel</strong>
                      </div>
                    </div>

                    <div className="mockup-primary-action">
                      Confirmer la reservation
                    </div>

                    <div className="mockup-bottom-nav">
                      <span className="active" />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className="mockup-panel">
                  <div className="mockup-panel-badge">
                    <img className="panel-logo-image" src={ekymoovLogo} alt="Ekymoov" />
                    <span>Ekymoov network</span>
                  </div>
                  <div className="mockup-panel-line short" />
                  <div className="mockup-panel-line" />
                  <div className="mockup-panel-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-status-list">
                    <div>Disponibilite en temps reel</div>
                    <div>Reservation simplifiee</div>
                    <div>Accompagnement fiable</div>
                  </div>
                  <div className="mockup-support-card">
                    <strong>Support humain</strong>
                    <span>Une assistance claire pour accompagner chaque trajet.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="problem">
          <div className="problem-layout">
            <div className="section-heading reveal">
              <span className="eyebrow">Le constat</span>
              <h2>Se deplacer ne devrait pas devenir un obstacle supplementaire.</h2>
              <p>
                Pour trop de personnes a mobilite reduite, trouver un transport
                adapte reste complique, imprevisible et parfois impossible. Derriere
                chaque trajet manque, il y a un rendez-vous reporte, une sortie annulee
                ou une autonomie freinee.
              </p>
            </div>

            <div className="media-card reveal">
              <img src={gallery.problem} alt="Scene de mobilite urbaine et d'accompagnement" />
            </div>
          </div>

          <div className="problem-grid">
            {problems.map((problem) => (
              <article className="problem-card reveal" key={problem.value}>
                <strong>{problem.value}</strong>
                <p>{problem.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="solution">
          <div className="solution-layout">
            <div className="section-heading reveal">
              <span className="eyebrow">La solution</span>
              <h2>Ekymoov reunit reservation, transport adapte et disponibilite dans une seule app.</h2>
              <p>
                L'application simplifie toute l'experience de transport adapte:
                reserver un trajet, consulter la disponibilite, s'appuyer sur des
                chauffeurs formes et retrouver une experience plus fluide du depart a l'arrivee.
              </p>
            </div>

            <div className="media-card reveal media-card-tall">
              <img src={gallery.solution} alt="Utilisation d'une application mobile dans un contexte urbain" />
            </div>
          </div>

          <div className="feature-grid">
            {solutionFeatures.map((feature) => (
              <article className="feature-card reveal" key={feature.title}>
                <div className="feature-topline">
                  <div className="feature-icon">
                    <Icon type={feature.icon} />
                  </div>
                  <span className="feature-index">
                    {feature.icon === "booking"
                      ? "01"
                      : feature.icon === "driver"
                        ? "02"
                        : feature.icon === "vehicle"
                          ? "03"
                          : "04"}
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="section-heading reveal">
            <span className="eyebrow">Comment ca marche</span>
            <h2>Une experience mobile guidee, simple a comprendre et rassurante a chaque etape.</h2>
            <p>
              Ekymoov a ete pensee comme une vraie application de service: progressive,
              lisible et orientee vers un seul objectif, permettre un deplacement serein.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card reveal" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section value-section" id="mission">
          <div className="value-copy reveal">
            <span className="eyebrow">Notre mission</span>
            <h2>Construire une mobilite plus inclusive, plus digne et plus accessible.</h2>
            <p>
              Ekymoov ne cherche pas seulement a digitaliser un trajet. L'objectif
              est de redonner de la fluidite, de la visibilite et plus d'autonomie
              a des deplacements qui restent trop souvent compliques pour les personnes concernees.
            </p>

            <div className="value-list">
              {missionPoints.map((item) => (
                <div className="value-item reveal" key={item}>
                  <span className="value-check" aria-hidden="true">
                    +
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="value-panel reveal">
            <div className="media-card mission-image">
              <img src={gallery.mission} alt="Mobilite inclusive dans un environnement urbain" />
            </div>
            <div className="value-stat">
              <span>Vision produit</span>
              <strong>Une app utile, accessible et premium</strong>
            </div>
            <div className="value-stat">
              <span>Impact</span>
              <strong>Reduire la difficulte d'acces au transport adapte</strong>
            </div>
            <div className="value-stat">
              <span>Communaute</span>
              <strong>Utilisateurs, chauffeurs et partenaires engages</strong>
            </div>
          </aside>
        </section>

        <section className="section cta-section reveal" id="cta">
          <span className="eyebrow">Rejoindre Ekymoov</span>
          <h2>Utilisateurs, chauffeurs et partenaires: faisons avancer la mobilite inclusive ensemble.</h2>
          <p>
            Rejoignez le projet pour tester l'application, soutenir le developpement
            du reseau ou participer a une solution concrete pour les trajets PMR de demain.
          </p>

          <div className="cta-actions">
            <a className="button button-primary" href="#contact">
              Telecharger l'app
            </a>
            <a className="button button-ghost" href="mailto:hello@ekymoov.com">
              Devenir partenaire
            </a>
          </div>

          <div className="cta-tags">
            <span>Application mobile</span>
            <span>Transport adapte</span>
            <span>Chauffeurs formes</span>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <a className="brand footer-brand" href="#hero">
            <Brand />
          </a>
          <p className="footer-copy">
            L'application mobile dediee a une mobilite plus accessible pour les
            personnes a mobilite reduite.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href="#mission">A propos</a>
          <a href="mailto:hello@ekymoov.com">Contact</a>
          <a href="#hero">Confidentialite</a>
        </nav>
      </footer>
    </div>
  );
}
