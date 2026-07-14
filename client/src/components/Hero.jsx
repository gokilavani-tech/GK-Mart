import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">

        <span className="offer">
          🚀 India's Trusted Online Store
        </span>

        <h1>
          Upgrade Your <br />
          <span>Digital Lifestyle</span>
        </h1>

        <p>
          Buy the latest Mobiles, Laptops, Smart Watches and
          Accessories with secure payment, fast delivery
          and exclusive offers only at GK Mart.
        </p>

        <div className="hero-buttons">
          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now →
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>
        </div>

      </div>

      <div className="hero-image">

        <div className="floating-card">
          📱
        </div>

        <div className="floating-card">
          💻
        </div>

        <div className="floating-card">
          ⌚
        </div>

        <div className="floating-card">
          🎧
        </div>

      </div>
    </section>
  );
}

export default Hero;