import "./index.css";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name "
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
}
