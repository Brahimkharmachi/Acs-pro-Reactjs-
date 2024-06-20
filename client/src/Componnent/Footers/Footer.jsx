import React from "react";
import "./footers.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Swiperr from "./Swiper";

function Footer() {
  return (
    <div className="footer">
      <div className="nosclients">
        <h2>PARMI CEUX QUI NOUS ONT FAIT CONFIANCE :</h2>
      </div>
      <div className="footer-swiper">
        <Swiperr />
      </div>

      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#13243f" }}
                >
                  <img
                    src="./acs-pro.webp"
                    alt="acs pro"
                    className="logofooter"
                  />
                </h6>
                <p style={{ color: "#13243f" }}>
                  Si vous avez une question sur nos services n'hésitez pas à
                  nous contacter .
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#13243f" }}
                >
                  LIENS UTILES
                </h6>
                <p style={{ color: "#13243f" }}>
                  <a href="/" className="text-reset">
                    ACCUEIL
                  </a>
                </p>
                <p style={{ color: "#13243f" }}>
                  <a href="/entreprise" className="text-reset">
                    L'ENTREPRISE
                  </a>
                </p>
                <p style={{ color: "#13243f" }}>
                  <a href="/conseil-et-conception" className="text-reset">
                    CONSEIL ET CONCEPTION
                  </a>
                </p>
                <p style={{ color: "#13243f" }}>
                  <a href="/installation" className="text-reset">
                    L'INSTALLATION
                  </a>
                </p>
                <p style={{ color: "#13243f" }}>
                  <a href="/maintenance" className="text-reset">
                    MAINTENANCE
                  </a>
                </p>
                <p style={{ color: "#13243f" }}>
                  <a href="/contact" className="text-reset">
                    CONTACT
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#13243f" }}
                >
                  Contact
                </h6>
                <p style={{ color: "#13243f" }}>
                  <MDBIcon color="#13243f" icon="home" className="me-2" />
                  66 Av HABIB BOURGUIBA 2033 MEGRINE
                </p>
                <p style={{ color: "#13243f" }}>
                  <MDBIcon color="#13243f" icon="envelope" className="me-3" />
                  contact@acspro.tn
                </p>
                <p style={{ color: "#13243f" }}>
                  <MDBIcon color="#13243f" icon="phone" className="me-3" />
                  +216 95 000 655
                </p>
                <p style={{ color: "#13243f" }}>
                  <MDBIcon color="#13243f" icon="phone" className="me-3" />
                  +216 23 120 817
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center p-4" style={{ color: "#13243f" }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://www.acspro.tn/">
            acspro.tn
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
