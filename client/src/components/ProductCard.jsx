import "../styles/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  return (
    <section className="products">

      <h2 className="section-title">
        🔥 Featured Products
      </h2>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product._id}>

            <div className="discount-badge">
              20% OFF
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3 className="product-title">
              {product.name}
            </h3>

            <div className="rating">
              ⭐⭐⭐⭐⭐
              <span>(4.8)</span>
            </div>

            <p className="product-description">
              {product.description}
            </p>

            <div className="price-section">

              <h4 className="price">
                ₹ {product.price}
              </h4>

              <span className="discount">
                SAVE
              </span>

            </div>

            <Link
              to={`/product/${product._id}`}
              className="view-link"
            >
              <button className="view-btn">
                View Details →
              </button>
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductCard;