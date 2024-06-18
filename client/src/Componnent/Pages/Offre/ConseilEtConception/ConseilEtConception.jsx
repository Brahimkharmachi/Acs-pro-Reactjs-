import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import "./conseiletconceptions.css"

function ConseilEtConception() {
  return (
    <div>
      <div className='conseil'>
          <h5>CONSEIL ET CONCEPTION</h5>
      </div>

      <div id='conseil-p' className="container">
              <p>ACS PRO intervient en amont pour définir et préciser les besoins de ces clients en termes de production du froid, climatisation et traitement d’air. Chaque installation doit répondre à une problématique précise. A ce stade notre entreprise joue un rôle de conseil.
              </p>
              <div className="carousel-container">
   
              <MDBCarousel id='carouselconseil'>
      <MDBCarouselItem itemId={1}>
        <img src='./conseil.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
      </div>

      

    </div>
  )
}

export default ConseilEtConception
