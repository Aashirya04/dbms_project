import React, { useRef } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";  
import {Images} from '../../Images'

const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false, 
    centerMode: false,
};

  return (
    <div>
      <div className="home-container">
        <div className="home-box content-box">
          <h1>Discover the World of Masterful Paintings</h1>
          <p>
            Welcome to our art exploration website, where you can easily search for
            paintings by artist name, title, or era. Immerse yourself in the beauty
            of art and uncover the stories behind each masterpiece.
          </p>
          <div className="buttons">
          <Link to="/query">  
            <button className="explore-btn">Explore</button>
          </Link>
          <Link to="/query">  
            <button className="learn-btn">Learn More</button>
          </Link>
          </div>
        </div>
        <div className="home-box image-box">
        <img src ={Images.home} alt="painting" />
        </div>
      </div>

      <div className="home-container second-section">
        <div className="home-box1 content-box1">
          <h1>Explore Our Curated Collection of Masterpieces</h1>
          <p>
            Dive into a world of artistry with our featured paintings that showcase
            the brilliance of renowned artists. Each piece tells a unique story,
            inviting you to explore its beauty and significance.
          </p>
          <div className="buttons">
          <Link to="/query">  
            <button className="explore-btn1">View</button>
          </Link>
          <Link to="/query">  
            <button className="learn-btn1">Learn &gt;</button>
          </Link>
          </div>
        </div>
        <div className="home-box1 image-box1">
        <img src ={Images.home1} alt="painting" />
        </div>
      </div>

      <div className="third-section" id = "cards">
        <h1>Global Art Spotlight: Where Creativity Knows No Boundaries</h1>
        <div className="card-container">
          <div className="card">
            <img src={Images.basel} alt="Art History" />
            <h2>Art Basel</h2>
            <p>Art Basel is a premier international art fair held annually in Basel, Miami Beach, Hong Kong, and Paris. It showcases modern and contemporary masterpieces from top galleries worldwide, featuring paintings, sculptures, digital art, and installations. A hub for artists, collectors, and art lovers, Art Basel sets global trends in the art market and fosters cultural exchange.</p>
            <a href="https://www.artbasel.com/" target="_blank" rel="noopener noreferrer">Learn More &gt;</a>
          </div>
          <div className="card">
          <img src={Images.centre} alt="Art History" />
            <h2>Centre Pompidou</h2>
            <p>The Centre Pompidou is a Parisian cultural icon, famous for its bold inside-out design and vast modern art collection. Home to works by Picasso, Matisse, and Warhol, it also features a public library, live performances, and stunning rooftop views. A must-visit for art lovers!</p>
            <a href="https://en.wikipedia.org/wiki/Centre_Pompidou" target="_blank" rel="noopener noreferrer">Learn More &gt;</a>
          </div>
          <div className="card">
          <img src={Images.manet} alt="Art History" />
            <h2>Manet / Degas</h2>
            <p>Manet and Degas were two pioneers of modern art, blending Realism and Impressionism. Manet’s bold, provocative works challenged tradition, while Degas captured movement and daily life with striking compositions. Rivals yet influential to each other, they reshaped 19th-century art.</p>
            <a href="https://www.artbasel.com/" target="_blank" rel="noopener noreferrer">Learn More &gt;</a>
          </div>
        </div>
      </div>

      <div className="gallery-section" id = "gall">
        <h1 className="gallery-title">Art Gallery</h1>
        <p className="gallery-desc">"Every painting is a voyage into a sacred harbour of imagination."– Giotto di Bondone</p>

        <div className="carousel-container">
          <button
            className="carousel-arrow left-arrow"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &#8249;
          </button>

          <Slider ref={sliderRef} {...settings} className="carousel">
  <div className="carousel-item">
    <img src ={Images.img1} alt="Art 1" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img2} alt="Art 2" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img3} alt="Art 3" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img4} alt="Art 4" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img5} alt="Art 5" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img6} alt="Art 6" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img7} alt="Art 7" />
  </div>
  <div className="carousel-item">
    <img src ={Images.img8} alt="Art 8" />
  </div>
</Slider>

          <button
            className="carousel-arrow right-arrow"
            onClick={() => sliderRef.current.slickNext()}
          >
            &#8250;
          </button>
        </div>
      </div>
      <section className="newsletter-section" id = "contact">
        <h2>Stay Updated on Art Discoveries</h2>
        <p>Subscribe now to receive the latest news on new paintings and upcoming exhibitions.</p>
        <div className="newsletter-buttons">
          <button className="subscribe-btn">Subscribe</button>
          <Link to="/query"> 
          <button className="learn-btn">Learn More</button>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3>Famous Paintings</h3>
          </div>
          <div className="footer-column">
            <h4>Explore Art</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Events</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Stay Connected</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Newsletter</h4>
            <ul>
              <li>Subscribe Now</li>
              <li>Get Updates</li>
              <li>Special Offers</li>
              <li>Contact Us</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Join</h4>
            <p>Join our newsletter to stay updated on our latest features and releases.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Art Explorer. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="footer-social">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </div>
     );
};

export default Home;
