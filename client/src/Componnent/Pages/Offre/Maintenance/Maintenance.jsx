import React from "react";
import "./maintenances.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Maintenance() {
  return (
    <div>
      <div className="maintenance">
        <h5>MAINTENANCE</h5>
      </div>
      <div className="maintenance-p">
        <div className="container">
          <div>
            <p>
              Après l’installation débute une phase où la notion de service
              prend tout son sens chez ACS PRO. Le service après-vente comprend
              l’entretien, la maintenance et le dépannage. Nous proposons
              différents types de contrats de maintenance à nos clients en
              fonction de leurs souhaits et besoins. Soulignons que travaux
              d’installation et contrats d’entretien sont théoriquement
              indépendants l’un de l’autre. Il est ainsi possible pour ACS PRO
              d’assurer la maintenance d’un équipement dont elle n’a pas réalisé
              elle-même l’installation.
            </p>
          </div>
          <div className="carousel-container">
            <MDBCarousel
              showControls
              showIndicators
              style={{ width: "710px", height: "460px" }}
            >
              <MDBCarouselItem itemId={1}>
                <img
                  src="./carousel-maintenance/maintenance1.webp"
                  className="d-block w-100"
                  alt="maintenance1"
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img
                  src="./carousel-maintenance/maintenance2.webp"
                  className="d-block w-100"
                  alt="maintenance2"
                />
              </MDBCarouselItem>
            </MDBCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
