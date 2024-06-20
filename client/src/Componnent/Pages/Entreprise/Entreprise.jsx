import React from "react";
import "./entreprises.css";

function Entreprises() {
  return (
    <>
      <div className="entreprise">
        <h5>L'ENTREPRISE</h5>
      </div>
      <div className="entreprise-p">
        <div className="container">
          <img src="./acs-pro.webp" alt="acs pro" />
          <p>
            Depuis 2017 La société Air Conditioning Services PRO intervient dans
            les domaines de la réalisation du lot fluides des divers projets.
            Nous fournissons à nos clients des prestations de qualité exécutées
            par des professionnels. Le suivi de nos réalisations, ainsi qu'une
            disponibilité permanente, sont les conditions essentielles d'un
            service performant. Pour tous projets à concevoir dans le domaine
            climatique et thermique, nos compétences et notre expérience nous
            permettrons de concevoir une offre adaptée à votre situation et à
            vos besoins, les économies d'énergie demeurant une de nos priorités.
          </p>
        </div>
      </div>
    </>
  );
}

export default Entreprises;
