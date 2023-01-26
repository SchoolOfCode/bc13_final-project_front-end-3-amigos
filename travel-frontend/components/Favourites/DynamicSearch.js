export default function DynamicSearchBar({handleSearch}) {
  return (
    <div className="search-bar-container">
      <input onChange={(e)=>{
        handleSearch(e)
      }}
        className="search-bar"
        type="text"
        placeholder="Browse your Favourites..."
      ></input>
    </div>
  );
}
