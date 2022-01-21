import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <ul className="footerLinks">
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Legal Information</a>
            </li>
            <li>
              <a href="">Privacy and Cookies</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul className="footerLinks">
            <li>
              <a href=""> Committed to Safer Gambling</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
