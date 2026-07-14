import "../styles/Navbar.css";
import SearchBar from "./SearchBar";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { toast } from "react-toastify";

function Navbar({ search, setSearch }) {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully 👋");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🛍️</span>

        <div className="logo-text">
          <h2>GK Mart</h2>
        </div>
      </div>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <Link to="/wishlist" className="cart-link">
          <div className="cart-wrapper">
            <FaHeart className="icon" />

            <span className="cart-count">
              {wishlist.length}
            </span>
          </div>
        </Link>
        <Link to="/cart" className="cart-link">
          <div className="cart-wrapper">
            <FaShoppingCart className="icon" />

            <span className="cart-count">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
        </Link>
        {user ? (
          <>
            <span className="user-name">
              Hi, {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="login-link"
          >
            <FaUser className="icon" />
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;