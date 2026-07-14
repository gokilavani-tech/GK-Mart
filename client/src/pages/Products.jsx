import "../styles/Products.css";
import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

function Products({ search }) {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

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

  const filteredProducts = products.filter((product) => {

    const searchText = search.toLowerCase().trim();

    const searchMatch =
      product.name.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    const categoryMatch =
      category === "All" ||
      product.category.toLowerCase().startsWith(category.toLowerCase());

    return searchMatch && categoryMatch;

  });

  return (

    <div className="products-page">

      <h1 className="products-heading">
        Explore Our Products
      </h1>

      <div className="category-buttons">

        <button
          className={category === "All" ? "active-category" : ""}
          onClick={() => setCategory("All")}
        >
          🛒 All
        </button>

        <button
          className={category === "Mobile" ? "active-category" : ""}
          onClick={() => setCategory("Mobile")}
        >
          📱 Mobiles
        </button>

        <button
          className={category === "Laptop" ? "active-category" : ""}
          onClick={() => setCategory("Laptop")}
        >
          💻 Laptops
        </button>

        <button
          className={category === "Accessories" ? "active-category" : ""}
          onClick={() => setCategory("Accessories")}
        >
          🎧 Accessories
        </button>

      </div>

      <ProductCard products={filteredProducts} />

    </div>

  );

}

export default Products;