import "./App.css";

const CLINIC_URL = "https://www.wingsarena.com/labor-day-combine";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="promo-icon"
    >
      <path
        d="M7 2v3M17 2v3M3.5 9h17M5.5 4.5h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="promo-page">
      <article className="promo-card">
        <div className="promo-topbar">
          <img
            src="./wings-logo.png"
            alt="Wings Arena"
            className="promo-logo"
          />
        </div>

        <div className="promo-content">
          <div className="promo-heading">
            <span className="promo-heading-blue">
              LABOR DAY
            </span>

            <span className="promo-heading-red">
              SKILLS COMBINE
            </span>

            <span className="promo-heading-red">
              CLINIC
            </span>
          </div>

          <div className="promo-division">
            PEEWEE &amp; BANTAM
          </div>

          <div className="promo-date">
            <CalendarIcon />
            <span>SEPT 5–7</span>
          </div>

          <a
            className="promo-button"
            href={CLINIC_URL}
            target="_top"
            rel="noopener noreferrer"
          >
            Registration &amp; Info
          </a>

          <p className="promo-tagline">
            Get the Data Behind Your Game!
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;