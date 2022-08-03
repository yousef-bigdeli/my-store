import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSearchSubmit}>
        <div className={styles.searchField}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchValue}
            className={styles.searchInput}
            placeholder="Search"
          />
          <button type="submit" className={styles.searchBtn}>
            <IoSearchOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
