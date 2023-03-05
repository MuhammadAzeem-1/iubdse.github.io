import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-sec-hd">
        <h1 className="gradient_text">
          Do you want to step in <br /> to the future before others
        </h1>
      </div>

      <div className="footer-btn">
        <p>Enroll For Your Future</p>
      </div>

      <section className="footer-content-2">
        <div className="footer-sec-logo">
          <img src="" alt="logo" />
          <p>
            Created By Muhammad Azeem Semester-5
            <br /> All Rights Reserved
          </p>
        </div>

        <div className="footer-sec-links">
          <h4>Links</h4>
          <p>myIUB</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-sec-links">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-sec-links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </section>
      <div className="copyWrite">
        <p>© 2021 SE.IUB. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
