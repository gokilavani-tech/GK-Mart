import "../styles/DeliveryAddress.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeliveryAddress() {

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(address)
    );

    navigate("/payment");

  };

  return (

    <div className="delivery-page">

      <div className="delivery-card">

        <h1 className="delivery-title">
          Delivery Address
        </h1>

        <p className="delivery-subtitle">
          Enter your shipping details to continue your order.
        </p>

        <form
          className="delivery-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter Full Address"
              onChange={handleChange}
              required
            ></textarea>

          </div>

          <div className="two-column">

            <div className="input-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>State</label>

              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Pincode</label>

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="continue-btn"
          >
            Continue to Payment →
          </button>

        </form>

      </div>

    </div>

  );

}

export default DeliveryAddress;