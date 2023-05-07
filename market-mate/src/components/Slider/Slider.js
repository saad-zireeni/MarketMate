import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thefruitshop.in/images/header3/slider2.jpg"
          alt="First slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thefruitshop.in/images/header3/slider1.png"
          alt="Second slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/fresh-bread-banner-template-horizontal-bakery-advertising-isolated-white-background-238177193.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
