import "../styles/PaymentMethod.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import { CartContext } from "../context/CartContext";
import {
  FaGooglePay,
  FaCreditCard,
  FaMoneyBillWave,
} from "react-icons/fa";
import { SiPaytm, SiPhonepe } from "react-icons/si";

function PaymentMethod() {
  const navigate = useNavigate();
  const { addOrder } = useContext(OrderContext);
  const { cart, setCart } = useContext(CartContext);

  const buyNowProduct = JSON.parse(
    localStorage.getItem("buyNowProduct")
  );

  const products = buyNowProduct
    ? [{ ...buyNowProduct, quantity: 1 }]
    : cart;

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [payment, setPayment] = useState("Cash On Delivery");

  const placeOrder = () => {
    const address = JSON.parse(
      localStorage.getItem("deliveryAddress")
    );

    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      customer: address,
      payment,
      products,
      total,
      status: "Order Confirmed",
    };

    addOrder(order);

    localStorage.setItem(
      "paymentMethod",
      payment
    );

    localStorage.removeItem(
      "buyNowProduct"
    );

    setCart([]);

    navigate("/success");
  };

  return (
    <div className="payment-page">

      <div className="payment-container">

        <div className="payment-left">

          <h1>Select Payment Method</h1>

          <div className="payment-card">

            <label className="payment-option">
              <input
                type="radio"
                value="Google Pay"
                checked={payment === "Google Pay"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <FaGooglePay />
              Google Pay
            </label>

            <label className="payment-option">
              <input
                type="radio"
                value="PhonePe"
                checked={payment === "PhonePe"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <SiPhonepe />
              PhonePe
            </label>

            <label className="payment-option">
              <input
                type="radio"
                value="Paytm"
                checked={payment === "Paytm"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <SiPaytm />
              Paytm
            </label>

            <label className="payment-option">
              <input
                type="radio"
                value="Debit Card"
                checked={payment === "Debit Card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <FaCreditCard />
              Debit Card
            </label>

            <label className="payment-option">
              <input
                type="radio"
                value="Cash On Delivery"
                checked={payment === "Cash On Delivery"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <FaMoneyBillWave />
              Cash On Delivery
            </label>

          </div>

        </div>

        <div className="payment-right">

          <div className="summary-card">

            <h2>Order Summary</h2>

            {products.map((item) => (

              <div
                className="summary-item"
                key={item._id}
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹ {item.price * item.quantity}
                </span>
              </div>

            ))}

            <hr />

            <div className="summary-item">
              <strong>Delivery</strong>
              <strong>FREE</strong>
            </div>

            <div className="summary-item total">
              <strong>Total</strong>
              <strong>₹ {total}</strong>
            </div>

            <button
              className="place-order-btn"
              onClick={placeOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PaymentMethod;