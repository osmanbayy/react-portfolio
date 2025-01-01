import { useState } from "react";
import "./qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Personal Journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div
            
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification-icon"></i> Experience
          </div>
        </div>

        <div className="qualification-sections">
          {/* Education Content */}
          <div
            className={
              toggleState === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Computer Engineering</h3>
                <span className="qualification-subtitle">
                  Turkey - Tekirdag Namik Kemal University
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">
                  English Preparatory Class
                </h3>
                <span className="qualification-subtitle">
                  Turkey - TNKU School of Foreign Languages
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">High School</h3>
                <span className="qualification-subtitle">
                  Turkey - Sariyer Ali Akkanat Anatolian High School
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
          {/* Experience Content */}
          <div
            className={
              toggleState === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Online Freelancer</h3>
                <span className="qualification-subtitle">Turkey</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
