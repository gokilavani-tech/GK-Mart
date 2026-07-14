import "../styles/Orders.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";

function Orders() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="orders-page">

      <h1 className="orders-title">
        My Orders
      </h1>

      {orders.length === 0 ? (

        <div className="empty-orders">

          <h2>No Orders Yet 📦</h2>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>

        </div>

      ) : (

        orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <div className="order-header">

              <div>
                <h3>Order ID</h3>
                <p>#{order.id}</p>
              </div>

              <div>
                <h3>Date</h3>
                <p>{order.date}</p>
              </div>

              <div>
                <h3>Status</h3>
                <span className="order-status">
                  {order.status}
                </span>
              </div>

            </div>

            <hr />

            <div className="customer-details">

              <h2>Customer Details</h2>

              <p><strong>Name :</strong> {order.customer.name}</p>

              <p><strong>Phone :</strong> {order.customer.phone}</p>

              <p><strong>Address :</strong> {order.customer.address}</p>

            </div>

            <div className="ordered-products">

              <h2>Ordered Products</h2>

              {order.products.map((product) => (

                <div
                  className="product-row"
                  key={product._id}
                >
                  <span>
                    {product.name} × {product.quantity}
                  </span>

                  <strong>
                    ₹ {product.price * product.quantity}
                  </strong>

                </div>

              ))}

            </div>

            <div className="order-total">

              <h2>Total Amount</h2>

              <h2 className="total-price">
                ₹ {order.total}
              </h2>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default Orders;