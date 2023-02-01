export default function DynamicSearchBar({ handleSearch }) {
  return (
    <div className=" fav-search-bar-container">
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        className="fav-search-bar"
        type="text"
        placeholder="Browse your Favourites..."
      ></input>
    </div>
  );
}
