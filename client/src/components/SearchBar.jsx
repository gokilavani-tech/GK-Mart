import "../styles/SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function SearchBar({ search, setSearch }) {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/products");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/products");
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Mobiles, Laptops, Watches..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        <FiSearch size={20} />
      </button>
    </div>
  );
}
export default SearchBar;