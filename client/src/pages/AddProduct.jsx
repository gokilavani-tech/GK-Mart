import "../styles/AddProduct.css";
import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function AddProduct() {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/products/add", formData);

      toast.success("Product Added Successfully ✅");

      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        brand: "",
        stock: "",
        image: "",
      });

    } catch (error) {

      toast.error("Failed To Add Product ❌");
      console.log(error);

    }

  };

  return (

    <div className="add-product-page">

      <div className="add-product-card">

        <h1>Add New Product 📦</h1>

        <p className="add-subtitle">
          Fill all product details below
        </p>

        <form
          className="add-product-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Available Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="add-product-btn"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>

  );

}

export default AddProduct;