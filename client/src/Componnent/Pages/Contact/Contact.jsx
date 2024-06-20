import React from "react";
import "./contacts.css";

function Contact() {
  return (
    <div>
      <div className="contact">
        <h5>Contact</h5>
      </div>
      <div className="contact-p">
        <div id="contactone" className="container">
          <h2>CONTACTEZ-NOUS</h2>
          <p>
            Si vous avez une question sur nos services n'hésitez pas à nous
            contacter .
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Siége Social</h2>
                    <span>66 Av HABIB BOURGUIBA</span>
                    <span>Mégrine 2033 Tunisie</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>contact@acspro.tn</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>téléphone</h2>
                    <span>+216 95 000 655</span>
                    <span>+216 23 120 817</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
