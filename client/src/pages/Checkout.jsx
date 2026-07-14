import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { toast } from "react-toastify";
function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
     toast.error("Please Fill All Details");
      return;
    }

    const order = {
      id: Date.now(),
      customer,
      products: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    addOrder(order);

  toast.success("Order Placed Successfully 🎉");

    setCart([]);

    navigate("/orders");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <h2>Customer Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={customer.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={customer.phone}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        value={customer.address}
        onChange={handleChange}
      />

      <hr />

      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <div>
            <h3>{item.name}</h3>
            <p>Price : ₹ {item.price}</p>
            <p>Quantity : {item.quantity}</p>
            <p>Subtotal : ₹ {item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: "20px" }}>
        Grand Total : ₹ {totalPrice}
      </h2>

      <button
        className="buy-btn"
        style={{ marginTop: "20px" }}
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;