import { Link } from "react-router-dom";
import "./Hero.css";
import StarIcon from "../../assets/icons/StarIcon";


function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="dot" /> New Collection 2026
          </span>
          <h1 className="hero-title">
            Premium <span className="text-accent">Tech Gadgets</span>
            <br /> Built for the Future
          </h1>
          <p className="hero-text">
            Discover the latest in audio, wearables and gaming. Curated by
            engineers, loved by creators.
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn-primary primary-btn-color">
              Shop Now
            </Link>
            <Link to="/categories" className="btn-ghost">
              Browse Categories
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>50K+</strong>
              <span>Happy Customers</span>
            </div>
            <div>
              <strong>1200+</strong>
              <span>Products</span>
            </div>
            <div>
              <strong>
                4.9
                <StarIcon className={"star-icon"} />
              </strong>
              <span>Average Rating</span>
            </div>
          </div>
        </div>


        <div className="hero-visual">
          <div className="hero-glow" />
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"
            alt="Featured premium headphones"
          />
        </div>
      </div>
    </section>
  );
}


export default Hero;



