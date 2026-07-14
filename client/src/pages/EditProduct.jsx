import "../styles/EditProduct.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {

    try {

      const { data } = await API.get(`/products/${id}`);

      setProduct(data.product);

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };

  const updateProduct = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/products/${id}`, product);

      toast.success("Product Updated Successfully ✨");

      navigate("/admin");

    } catch (error) {

      toast.error("Failed To Update Product ❌");

      console.log(error);

    }

  };

  return (

    <div className="edit-product-page">

      <div className="edit-product-card">

        <h1>Edit Product ✏️</h1>

        <p className="edit-subtitle">
          Update the product details below
        </p>

        <form
          className="edit-product-form"
          onSubmit={updateProduct}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={product.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={product.brand}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Available Stock"
            value={product.stock}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="edit-product-btn"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>

  );

}

export default EditProduct;