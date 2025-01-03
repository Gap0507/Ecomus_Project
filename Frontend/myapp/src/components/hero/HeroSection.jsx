import React, { useEffect, useState } from "react";
import "../../assets/styles/HeroSection.css"; // Custom CSS file
import SpringClearanceBanner from "./SpringClearanceBanner";
import axios from "axios";

const HeroSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // To track the active carousel index

  useEffect(() => {
    // Fetch banners from the backend
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:7777/homePage/banners"); // Adjust the URL if needed
        setBanners(response.data.banners);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    // Ensure DOM element exists before adding event listener
    const carousel = document.getElementById("heroCarousel");
    if (!carousel) return; // Avoid null reference

    const handleSlideChange = (event) => {
      setActiveIndex(event.to); // Update active index based on the `to` property
    };

    carousel.addEventListener("slide.bs.carousel", handleSlideChange);

    return () => {
      if (carousel) {
        carousel.removeEventListener("slide.bs.carousel", handleSlideChange);
      }
    };
  }, [banners]); // Add dependency on `banners` to ensure it's updated after fetching

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="hero-section">
      {/* Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Images */}
        <div className="carousel-inner">
          {banners.map((banner, index) => (
            <div
              key={banner._id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`http://localhost:7777${banner.image}`} // Use relative path
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Overlay Text Section */}
        <div className="overlay-text-left text-white">
          {banners[activeIndex] && (
            <div className="text-wrapper">
              <h1 className="display-1 fw-bold">{banners[activeIndex].heading}</h1>
              <p className="lead mt-3 d-none d-md-block">{banners[activeIndex].text}</p>
              <button className="btn btn-dark btn-lg mt-4">
                Shop collection &rarr;
              </button>
            </div>
          )}
        </div>
      </div>

      <SpringClearanceBanner />
    </div>
  );
};

export default HeroSection;
