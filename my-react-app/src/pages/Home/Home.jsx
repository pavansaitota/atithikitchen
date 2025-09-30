import React from "react";
import '../Home/index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg1 from "../../assets/login.png";
import gif1 from "../../assets/idea.gif";
import ban1 from "../../assets/ban1.png";
import ban2 from "../../assets/ban2.png";
import map from "../../assets/map.gif";
import facebook from "../../assets/facebook.gif";
import instagram from "../../assets/instagram.gif";

// CRITICAL RESPONSIVE OBJECT DEFINITION (Required for rendering and slide logic)
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // With only 2 items, this means it will try to show all items at once on tablets.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Home = () => {
  return (
    <div className="top" id="top">
      <div id="title">
        <h1>Welcome to Atithi Kitchen</h1>
        <p>Make your day more Dalicious</p>
      </div>
      <div>
        <Carousel
          swipeable={true}
          draggable={true} // Set to true to allow mouse/touch drag
          showDots={true} // Re-added for navigation feedback

          responsive={responsive} // <--- CRITICAL: MUST BE PRESENT

          ssr={true}
          infinite={true}
          autoPlay={true} // <--- Added: Enables automatic sliding
          autoPlaySpeed={3000} // Increased speed for better visibility
          keyBoardControl={true}
          customTransition="all .50"
          transitionDuration={1}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]} // Re-added
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* Consider adding a third item if possible for better carousel behavior */}
          <img src={bg1} alt="Carousel Slide 1" />
          <img src={gif1} alt="Carousel Slide 2" />
          <img src={ban1} alt="Carousel Slide 3" />
          <img src={ban2} alt="Carousel Slide 4" />
        </Carousel>
      </div>
      <footer>
        <div class="footer">
          <div class="footer-box">
            <div class="social-media">
              <a href="https://www.facebook.com/share/WHjnaick2UGQXqjt/?mibextid=qi2Omg"><img src={facebook} class="fa-brands fa-facebook"/></a>
              <a href="https://www.instagram.com/psr_tellugu?igsh=MTduY2UyazhicnpkZA=="><img src={instagram} class="fas fa-map-marker-alt"/></a>
              <a href="https://x.com/pavansaitelugu?t=yYdJLgea_mmyC13hEWSHlA&s=09"><img src="https://media.tenor.com/UmW_-XJxwssAAAAj/x-twitter.gif" class="fa-brands fa-twitter"/></a>
              <a href="https://www.youtube.com/channel/UCdYqshI0yGsICPuKdB_22yA"><img src="https://media.tenor.com/cyq-OvNrDM4AAAAm/spinning-youtube.webp" class="fa-brands fa-youtube"/></a>
              <a href="https://maps.app.goo.gl/axC3sbvD276Qg6uv5"><img src={map} class="fas fa-map-marker-alt"/></a>
            </div>
            <div class="copyright">
              <label>Copyright &copy; 2024 || TANVIYAAN PVT.LTD</label>
            </div>
            <div class="brand">
              <label>ATITHI-<span>KITCHEN</span></label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;