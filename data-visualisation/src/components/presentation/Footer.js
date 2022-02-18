import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        <div className="row">
          <ul className="footerLinks">
            <li>
              <a>Terms and Conditions</a>
            </li>
            <li>
              <a>Help</a>
            </li>
            <li>
              <a>Legal Information</a>
            </li>
            <li>
              <a>Privacy and Cookies</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul className="footerLinks">
            <li>
              <a> Committed to Safer Gambling</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
