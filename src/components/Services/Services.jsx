import { useState } from "react";
import "./services.css";

export default function Services() {
  const [toggleState, setToggleState] = useState(0);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer?</span>

      <div className="services-container container grid">
        <div className="services-content">
          <i className="bx bx-code-alt services-icon"></i>
          <h3 className="services-title">
            Web <br /> Development
          </h3>

          <span className="services-button" onClick={() => setToggleState(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => setToggleState(0)}
              ></i>

              <h3 className="services-modal-title">Web</h3>
              <p className="services-modal-description">
                Service with more than 3 years experience. Providing quality
                work to clients and compaines.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company or personal brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <i className="uil uil-apps services-icon"></i>
          <h3 className="services-title">
            App <br /> Designer
          </h3>

          <span className="services-button" onClick={() => setToggleState(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div
              className="services-modal-content"
              onClick={() => setToggleState(0)}
            >
              <i className="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">App</h3>
              <p className="services-modal-description">
                Service with more than 3 years experience. Providing quality
                work to clients and compaines.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company or personal brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <i className="uil uil-web-grid services-icon"></i>
          <h3 className="services-title">
            Web <br /> Design
          </h3>

          <span className="services-button" onClick={() => setToggleState(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div
              className="services-modal-content"
              onClick={() => setToggleState(0)}
            >
              <i className="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Database</h3>
              <p className="services-modal-description">
                Service with more than 3 years experience. Providing quality
                work to clients and compaines.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company or personal brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
