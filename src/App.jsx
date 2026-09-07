import "./App.css";

const LEARN_TO_PLAY_URL = "https://www.wingsarena.com/learntoplay";
const LEARN_TO_SKATE_URL = "https://www.wingsarena.com/learntoskate";
const MITES_LTP_URL = "https://www.wingsarena.com/mites-ltp-league";
const ADULT_HOCKEY_URL = "https://www.wingsarena.com/adult-hockey-classes";

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
            Featured Programs
          </span>
        </div>

        <div className="promo-content">
          <div className="promo-program">
            <div className="promo-heading">
              <span className="promo-heading-blue">
                FALL
              </span>

              <span className="promo-heading-red">
                LEARN TO PLAY
              </span>

              <span className="promo-heading-amp">
                &amp;
              </span>

              <span className="promo-heading-red">
                LEARN TO SKATE
              </span>
            </div>

            <a
              className="promo-button"
              href={LEARN_TO_PLAY_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Learn to Play
            </a>

            <a
              className="promo-button promo-button-blue"
              href={LEARN_TO_SKATE_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Learn to Skate
            </a>
          </div>

          <div className="promo-divider" />

          <div className="promo-program promo-program-alt">
            <div className="promo-heading">
              <span className="promo-heading-red">
                MITES
              </span>

              <span className="promo-heading-blue">
                LTP LEAGUE
              </span>
            </div>

            <a
              className="promo-button"
              href={MITES_LTP_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Registration &amp; Info
            </a>

            <div className="promo-subdivider" />

            <div className="promo-heading">
              <span className="promo-heading-red">
                ADULT
              </span>

              <span className="promo-heading-blue">
                HOCKEY CLASSES
              </span>
            </div>

            <a
              className="promo-button promo-button-red"
              href={ADULT_HOCKEY_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              Registration &amp; Info
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
