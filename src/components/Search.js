import React from "react";
import { MdSearch } from "react-icons/md";
const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em"></MdSearch>
      <input
        className="search-input"
        type="text"
        placeholder="Type to Search"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
