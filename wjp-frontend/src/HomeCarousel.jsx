import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img src="fee.png" className="d-block w-100" alt="..." />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;
