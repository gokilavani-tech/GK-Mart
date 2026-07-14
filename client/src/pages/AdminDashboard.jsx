import "../styles/AdminDashboard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function AdminDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== "admin@gkmart.com") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "100px",
        }}
      >
        <h1>🚫 Access Denied</h1>

        <p>
          Only Admin Can Access This Page
        </p>
      </div>
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/products/${id}`);

      toast.success("Product Deleted Successfully 🗑️");

      fetchProducts();

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="products-page">

      <h1>Admin Dashboard</h1>

      <h2>Total Products : {products.length}</h2>

      <Link to="/add-product">

        <button
          className="buy-btn"
          style={{ marginBottom: "20px" }}
        >
          Add New Product
        </button>

      </Link>

      {products.map((product) => (

        <div
          className="cart-item"
          key={product._id}
        >

          <div>

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

            <p>Stock : {product.stock}</p>

            <p>Category : {product.category}</p>

            {product.stock === 0 && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Out Of Stock
              </p>
            )}

          </div>

          <div>

            <Link
              to={`/edit-product/${product._id}`}
            >
              <button className="buy-btn">
                Edit
              </button>
            </Link>

            <button
              className="remove-btn"
              style={{ marginLeft: "10px" }}
              onClick={() =>
                deleteProduct(product._id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}

export default AdminDashboard;