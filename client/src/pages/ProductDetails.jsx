import "../styles/ProductDetails.css";
import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { toast } from "react-toastify";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetchProduct();
  }, [id]);
  const fetchProduct = async () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const { data } = await API.get(`/products/${id}`);
      setProduct(data.product);
      const allProducts = await API.get("/products");
      const related = allProducts.data.products
        .filter((item) => item._id !== data.product._id)
        .slice(0, 4);
      setRelatedProducts(related);
    } catch (error) {
      console.log(error);
    }
  };
  if (!product) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Loading...
      </h2>
    );
  }
  return (
    <>
      <div className="product-details-page">
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />
        <div className="details-content">
          <h1>{product.name}</h1>
         <div className="price-section">
  <h2>₹ {product.price}</h2>
  <span className="discount">
    20% OFF
  </span>
</div>
          <p>{product.description}</p>
          <p>
            <strong>Category :</strong> {product.category}
          </p>
          <p>
            <strong>Brand :</strong> {product.brand}
          </p>
          <p>
            <strong>Stock :</strong> {product.stock}
          </p>
          <div className="review-section">
  <h2>Customer Reviews</h2>
  <div className="review-card">
    <h4>⭐⭐⭐⭐⭐ Rahul</h4>
    <p>Excellent product. Worth the money.</p>
  </div>
  <div className="review-card">
    <h4>⭐⭐⭐⭐☆ Priya</h4>
    <p>Very good quality and fast delivery.</p>
  </div>
  <div className="review-card">
    <h4>⭐⭐⭐⭐⭐ Arjun</h4>
    <p>Highly recommended. Amazing experience.</p>
  </div>
</div>
          <div className="quantity-box">
  <button
    onClick={() =>
      quantity > 1 && setQuantity(quantity - 1)
    }
  >
    -
  </button>
  <span>{quantity}</span>
  <button
    onClick={() => setQuantity(quantity + 1)}
  >
    +
  </button>
</div>
<div className="product-buttons">
            <button
              className="buy-btn"
              onClick={() => {
              addToCart({
  ...product,
  quantity,
});
                toast.success("Product Added To Cart 🛒");
              }}
            >
              Add To Cart
            </button>
            <button          
className="wishlist-btn"
              onClick={() => {
                addToWishlist(product);
                toast.success("Added To Wishlist ❤️");
              }}
            >
              Wishlist ❤️
            </button>
            <button
            className="buy-now-btn"
              onClick={() => {
  localStorage.setItem(
    "buyNowProduct",
    JSON.stringify({
  ...product,
  quantity,
})
  );
  navigate("/delivery");
}}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="related-products">
  <h2 className="related-title">
    You May Also Like
  </h2>
  <div className="related-container">
    {relatedProducts.length > 0 ? (
      relatedProducts.map((item) => (
        <div
          className="related-card"
          key={item._id}
        >
          <div className="discount-badge">
            20% OFF
          </div>
          <img
            src={item.image}
            alt={item.name}
            className="related-image"
          />
          <h3 className="related-name">
            {item.name}
          </h3>
          <div className="rating">
            ⭐⭐⭐⭐⭐
            <span>(4.8)</span>
          </div>
          <p className="related-price">
            ₹ {item.price}
          </p>
          <Link
            to={`/product/${item._id}`}
            className="view-link"
          >
            <button className="view-btn">
              View Details →
            </button>
          </Link>
        </div>
      ))
    ) : (
      <h3>No Related Products</h3>
    )}
  </div>
</div>
    </>
  );
}
export default ProductDetails;