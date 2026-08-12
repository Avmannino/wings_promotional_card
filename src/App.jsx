import "./App.css";

const COMBINE_URL = "https://www.wingsarena.com/labor-day-combine";
const TUNE_UP_URL = "https://www.wingsarena.com/tune-up-clinic";

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

          <span className="promo-topbar-label">
            Labor Day Clinics
          </span>
        </div>

        <div className="promo-content">
          <div className="promo-program">
            <div className="promo-heading">
              <span className="promo-heading-blue">
                PRE-SEASON
              </span>

              <span className="promo-heading-red">
                TUNE-UP
              </span>

              <span className="promo-heading-red">
                CLINIC
              </span>
            </div>

            <div className="promo-division">
              MITES &amp; SQUIRTS
            </div>

            <div className="promo-date">
              <CalendarIcon />
              <span>SEPT 5–7</span>
            </div>

            <a
              className="promo-button"
              href={TUNE_UP_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Registration &amp; Info
            </a>

            <p className="promo-tagline">
              Shake Off the Rust. Get Ready for the Season!
            </p>
          </div>

          <div className="promo-divider" />

          <div className="promo-program promo-program-alt">
            <div className="promo-heading">
              <span className="promo-heading-red">
                SKILLS COMBINE
              </span>

              <span className="promo-heading-blue">
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
              href={COMBINE_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Registration &amp; Info
            </a>
          </div>

          <p className="promo-tagline">
            Get the Data Behind Your Game!
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;