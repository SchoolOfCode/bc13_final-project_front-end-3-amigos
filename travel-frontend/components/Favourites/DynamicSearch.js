export default function DynamicSearchBar({ handleSearch }) {
  return (
    <div className=" search-bar-container">
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        className="border-2 border-solid search-bar border-spacing-2 border-coral"
        type="text"
        placeholder="Browse your Favourites..."
      ></input>
    </div>
  );
}
