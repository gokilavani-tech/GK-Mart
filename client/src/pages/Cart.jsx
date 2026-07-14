import "../styles/Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty 🛒</h2>

          <Link to="/products">
            <button className="shop-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item._id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>

                <p className="cart-price">
                  ₹ {item.price}
                </p>

                <div className="quantity-box">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item._id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total : ₹ {totalPrice}</h2>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;