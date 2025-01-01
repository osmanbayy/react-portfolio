import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Osman Bay</h1>

        <ul className="footer-list">
          <li className="footer-list">
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-list">
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li className="footer-list">
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>
          <li className="footer-list">
            <a href="" className="footer-link"></a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/osmanbayy"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007242767631&locale=tr_TR"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/osmanbayy/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer-copy">&copy; Designed by Osman Bay.</span>
      </div>
    </footer>
  );
}
