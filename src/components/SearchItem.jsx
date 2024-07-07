const SearchItem = (filter, setFilter) => {
  return (
    <form className="searchForm">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        // value={filter}
        // onChange={(event) => setFilter(event.target.value)}
      />
    </form>
  );
};

export default SearchItem;
