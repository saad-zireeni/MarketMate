import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.thefruitshop.in/images/header3/slider2.jpg"
          alt="First slide" />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.thefruitshop.in/images/header3/slider1.png"
          alt="Second slide" />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-full "
          src="https://www.thefruitshop.in/images/header3/slider3.jpg"
          alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
