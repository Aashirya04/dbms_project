import React, { useRef } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            <button className="explore-btn">Explore</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className="home-box image-box">
          <img
            src="https://m.media-amazon.com/images/I/91+Ct5aLtTL.jpg"
            alt="Artistic eye"
          />
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
            <button className="explore-btn1">View</button>
            <button className="learn-btn1">Learn &gt;</button>
          </div>
        </div>
        <div className="home-box1 image-box">
          <img
            src="https://m.media-amazon.com/images/I/91+Ct5aLtTL.jpg"
            alt="Placeholder Art"
          />
        </div>
      </div>

      <div className="third-section">
        <h1>Explore the Masterpieces of Renowned Artists from Around the World</h1>
        <div className="card-container">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iNnp5Niv8Dn7vcNM6c9pdlIS76RVWog5wA&s" alt="Art History" />
            <h2>Dive into the Rich History of Art Through the Ages</h2>
            <p>Discover the iconic works that define artistic movements and styles.</p>
            <a href="#">Learn More &gt;</a>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iNnp5Niv8Dn7vcNM6c9pdlIS76RVWog5wA&s" alt="Cultural Art" />
            <h2>Uncover the Evolution of Art Styles and Their Cultural Significance</h2>
            <p>From Impressionism to Modernism, explore the styles that shaped art history.</p>
            <a href="#">Learn More &gt;</a>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iNnp5Niv8Dn7vcNM6c9pdlIS76RVWog5wA&s" alt="Historical Art" />
            <h2>Experience the Timeless Beauty of Art Through Historical Eras</h2>
            <p>Journey through time and witness the evolution of artistic expression.</p>
            <a href="#">Learn More &gt;</a>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h1 className="gallery-title">Art Gallery</h1>
        <p className="gallery-desc">Explore our curated collection of stunning artworks.</p>

        <div className="carousel-container">
          <button
            className="carousel-arrow left-arrow"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &#8249;
          </button>

          <Slider ref={sliderRef} {...settings} className="carousel">
  <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/81v1kCWtpQL.jpg" alt="Art 1" />
  </div>
  <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/81v1kCWtpQL.jpg" alt="Art 2" />
  </div>
  <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/81v1kCWtpQL.jpg" alt="Art 3" />
  </div>
  <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/81v1kCWtpQL.jpg" alt="Art 4" />
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
      <section className="newsletter-section">
        <h2>Stay Updated on Art Discoveries</h2>
        <p>Subscribe now to receive the latest news on new paintings and upcoming exhibitions.</p>
        <div className="newsletter-buttons">
          <button className="subscribe-btn">Subscribe</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3>Logo</h3>
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
