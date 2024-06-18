import React from 'react'
import "./footers.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



function Footer() {
  return (
    
 <div className='footer'>
    <div className='nosclients'>
        <h5>PARMI CEUX QUI NOUS ONT FAIT CONFIANCE :</h5>
    </div>
    <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplayTimeout={1000} >
    <div className='item'>
    <div className="brandImage">
            <img src="./carousel-footer/golden-tulip.jpg" />
          </div>
    </div>
    <div className='item'>
    <div className="brandImage">
            <img src="./carousel-footer/pfizer.png" />
          </div>
    </div>
    <div className='item'>
    <div className="brandImage">
            <img src="./carousel-footer/goncer.gif" />
          </div>
    </div>
    <div className='item'>
    <div className="brandImage">
            <img src="/image/sponsors/saida.png" />
          </div>
    </div>
    <div className='item'>
    <div className="brandImage">
            <img src="/image/sponsors/sotusel.png" />
          </div>
    </div>
    <div className='item'>
    <div className="brandImage">
            <img src="/image/sponsors/vitalait.png" />
          </div>
    </div>
    
</OwlCarousel>;


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
              </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"#13243f"}}>
               <img src='./acs-pro.gif' alt='acs pro' className='logofooter' />               
              </h6>
              <p style={{color:"#13243f"}}>
              Si vous avez une question sur nos services n'hésitez pas à nous contacter .
              </p>
            </MDBCol>


            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  className='text-uppercase fw-bold mb-4' style={{color:"#13243f"}}>LIENS UTILES</h6>
              <p style={{color:"#13243f"}}>
                <a href='#!' className='text-reset'  >
                  ACCUEIL
                </a>
              </p>
              <p style={{color:"#13243f"}}>
                <a href='#!' className='text-reset'>
                  L'ENTREPRISE
                </a>
              </p>
              <p style={{color:"#13243f"}}>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p style={{color:"#13243f"}}>
                <a href='#!' className='text-reset'>
                  CONTACT
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"#13243f"}}>Contact</h6>
              <p style={{color:"#13243f"}}>
                <MDBIcon color='#13243f' icon='home' className='me-2' />
                66 Av HABIB BOURGUIBA 2033 MEGRINE
              </p>
              <p style={{color:"#13243f"}}>
                <MDBIcon color='#13243f' icon='envelope' className='me-3' />
                contact@acspro.tn
              </p>
              <p style={{color:"#13243f"}}>
                <MDBIcon color='#13243f' icon='phone' className='me-3' />+216 95 000 655 / +216 23 120 817
              </p>
              <p style={{color:"#13243f"}}>
                <MDBIcon color='#13243f' icon='print' className='me-3' />71 425 500
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'  style={{color:"#13243f"}}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/' >
          acspro.tn
        </a>
      </div>
    </MDBFooter>



 </div>
   
  )
}

export default Footer
