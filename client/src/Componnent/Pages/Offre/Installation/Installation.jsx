import React from 'react'
import "./installations.css"
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


function Installations() {
  return (
    <div>
    <div className='instalation'>
        <h5>L'INSTALLATION</h5>
    </div>

    <div id='instalation-p' className="container">
            <p>L’étape suivant celle de la conception consiste à installer sur site l’équipement désiré, 
            ACS PRO met un point d’honneur à effectuer les travaux dans les meilleurs délais afin de satisfaire au mieux ses clients, en leur permettant de lancer ou de redémarrer rapidement un process industriel, ou en leur apportant le confort de travail attendu grâce à un système de conditionnement d’air judicieusement pensé.
            </p>

            <div className="carousel-container">

            <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>



            </div>



    </div>

    

  </div>

  )
}

export default Installations
