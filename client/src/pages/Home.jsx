import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import API from "../services/api";
function Home() {
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
  return (
    <>
      <Hero />
      <ProductCard products={products} />
    </>
  );
}
export default Home;