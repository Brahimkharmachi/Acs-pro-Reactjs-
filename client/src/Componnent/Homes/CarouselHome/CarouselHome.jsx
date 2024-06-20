import React from "react";
import "./carouselhomes.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function CarouselHome() {
  return (
    <div>
      <MDBCarousel>
        <MDBCarouselItem itemId={1}>
          <img
            className="d-block w-100 carou"
            src="./carouselaccueil.webp"
            alt="First slide"
            style={{ width: "1349px", height: "431px" }}
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default CarouselHome;
