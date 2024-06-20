import React from "react";
import "./homes.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselHome from "./CarouselHome/CarouselHome";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <CarouselHome />
      </div>
      <div className="accueil">
        <h5>NOS OFFRES</h5>
      </div>

      <div className="home-part-two">
        <div className="container">
          <div className="row">
            <div id="home-part-two-text" className="col-md-5">
              <h2>CONSEIL ET CONCEPTION</h2>
              <p>
                ACS PRO intervient en amont pour définir et préciser les besoins
                de ces clients en termes de production du froid, climatisation
                et traitement d’air. Chaque installation doit répondre à une
                problématique précise. A ce stade notre entreprise joue un rôle
                de conseil.
              </p>
            </div>
            <img
              src="conseil.webp"
              alt="conseil"
              className="col-md-7"
              style={{ width: "660px", height: "400px" }}
            />
          </div>
        </div>
        <div></div>
      </div>

      <div className="home-part-three">
        <div className="container">
          <div className="row">
            <img
              src="installation-accueil.webp"
              alt="installation-accueil"
              className="col-md-7"
              style={{ width: "660px", height: "400px" }}
            />
            <div id="home-part-three-text" className="col-md-5">
              <h2>L’INSTALLATION</h2>
              <p>
                L’étape suivant celle de la conception consiste à installer sur
                site l’équipement désiré, ACS PRO met un point d’honneur à
                effectuer les travaux dans les meilleurs délais afin de
                satisfaire au mieux ses clients, en leur permettant de lancer ou
                de redémarrer rapidement un process industriel, ou en leur
                apportant le confort de travail attendu grâce à un système de
                conditionnement d’air judicieusement pensé.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-part-four">
        <div className="container">
          <div className="row">
            <div id="home-part-four-text" className="col-md-5">
              <h2>LA MAINTENANCE</h2>
              <p>
                Après l’installation débute une phase où la notion de service
                prend tout son sens chez ACS PRO. Le service après-vente
                comprend l’entretien, la maintenance et le dépannage.Nous
                proposons différents types de contrats de maintenance à nos
                clients en fonction de leurs souhaits et besoins. Soulignons que
                travaux d’installation et contrats d’entretien sont
                théoriquement indépendants l’un de l’autre. Il est ainsi
                possible pour ACS PRO d’assurer la maintenance d’un équipement
                dont elle n’a pas réalisé elle-même l’installation.
              </p>
            </div>
            <img
              src="./carousel-maintenance/maintenance1.webp"
              alt="maintenance1"
              className="col-md-7"
              style={{ width: "660px", height: "450px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
