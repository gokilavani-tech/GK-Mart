import "../styles/OrderSuccess.css";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <h3>
          Thank You For Shopping With GK Mart ❤️
        </h3>

        <p>
          Your order has been confirmed.
          <br />
          It will be delivered within <strong>3 - 5 Days</strong>.
        </p>

        <div className="success-info">

          <div className="info-box">
            📦 Order Confirmed
          </div>

          <div className="info-box">
            🚚 Fast Delivery
          </div>

          <div className="info-box">
            🔒 Secure Payment
          </div>

        </div>

        <Link to="/">
          <button className="continue-btn">
            <FaShoppingBag />
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;