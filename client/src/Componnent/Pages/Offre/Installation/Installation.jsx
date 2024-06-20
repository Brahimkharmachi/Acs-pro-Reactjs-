import React from "react";
import "./installations.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Installations() {
  return (
    <div>
      <div className="instalation">
        <h5>L'INSTALLATION</h5>
      </div>
      <div className="instalation-p">
        <div className="container">
          <p>
            L’étape suivant celle de la conception consiste à installer sur site
            l’équipement désiré, ACS PRO met un point d’honneur à effectuer les
            travaux dans les meilleurs délais afin de satisfaire au mieux ses
            clients, en leur permettant de lancer ou de redémarrer rapidement un
            process industriel, ou en leur apportant le confort de travail
            attendu grâce à un système de conditionnement d’air judicieusement
            pensé.
          </p>

          <div className="carousel-container">
            <MDBCarousel
              showControls
              showIndicators
              style={{ width: "710px", height: "460px" }}
            >
              <MDBCarouselItem itemId={1}>
                <img
                  src="./carousel-installation/energyefficiency-chillers.webp"
                  className="d-block w-100"
                  alt="energyefficiency-chillers"
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img
                  src="./carousel-installation/installation2.webp"
                  className="d-block w-100"
                  alt="installation2"
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img
                  src="./carousel-installation/installation4.webp"
                  className="d-block w-100"
                  alt="installation4"
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={4}>
                <img
                  src="./carousel-installation/installation5.webp"
                  className="d-block w-100"
                  alt="installation5"
                />
              </MDBCarouselItem>
            </MDBCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installations;
