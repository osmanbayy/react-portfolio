import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <span className="section-subtitle">My Technical Level</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
