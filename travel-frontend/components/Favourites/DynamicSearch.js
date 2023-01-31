export default function DynamicSearchBar({ handleSearch }) {
  return (
    <div className="search-bar-container mt-40">
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        className="search-bar border-spacing-2 border-solid border-2 border-coral"
        type="text"
        placeholder="Browse your Favourites..."
      ></input>
    </div>
  );
}
