import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-socials-section">
          <ul className="footer-socials">
            <li>
              <a href="https://github.com/gladys-pascual/cheese-website" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://dev.to/gladyspascual" target="_blank">
                <i className="fab fa-dev"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gladyspascual/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="go-to-top-parent">
          <a href="#" className="go-to-top">
            {/* <i className="fab fa-angle-up"></i>
            <br /> */}
            <span className="back-to-top">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;