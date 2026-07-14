import "../styles/Wishlist.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">

      <h1 className="wishlist-title">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <h2>No Products In Wishlist</h2>

          <Link to="/products">
            <button className="shop-btn">
              Explore Products
            </button>
          </Link>

        </div>

      ) : (

        wishlist.map((item) => (

          <div
            className="wishlist-item"
            key={item._id}
          >

            <img
              src={item.image}
              alt={item.name}
              className="wishlist-image"
            />

            <div className="wishlist-info">

              <h3>{item.name}</h3>

              <p className="wishlist-price">
                ₹ {item.price}
              </p>

            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromWishlist(item._id)
              }
            >
              Remove
            </button>

          </div>

        ))

      )}

    </div>
  );
}

export default Wishlist;