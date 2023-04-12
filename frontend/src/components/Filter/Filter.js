import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";

function Filter({ onApply }) {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [filters, setFilters] = useState({
    genre: "",
    category: [],
    age: [],
  });

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const handleApply = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    onApply(filters);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

      <div className=" filter-icon-container">
        <button className="filter-icon" onClick={toggleFilter}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
      {(!isMobile || showFilter) && (
        <form className={`filter ${showFilter ? 'active' : ''}`}>
          <button className="close-button" onClick={closeFilter}>
            Close filter
          </button>
          <h1>Product Filters</h1>
          <div className="genre">
            <h3>Genre</h3>
            <select
              name="genre"
              id="genre"
              value={filters.genre}
              onChange={(e) =>
                setFilters({ ...filters, genre: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Non-Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="scifi">Science Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
            </select>
            <br />

          </div>
          <div className="category">
            <legend>Category</legend>
            <input type="checkbox" id="books" name="category" value="books" checked={filters.category.includes("books")}
              onChange={(e) => {
                const category = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  category: e.target.checked
                    ? [...prevFilters.category, category]
                    : prevFilters.category.filter((c) => c !== category),
                }));
              }}
            />
            <label htmlFor="books">Books</label> <br />
            <input type="checkbox" id="magazine" name="category" value="magazine" checked={filters.category.includes("magazine")}
              onChange={(e) => {
                const category = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  category: e.target.checked
                    ? [...prevFilters.category, category]
                    : prevFilters.category.filter((c) => c !== category),
                }));
              }}
            />
            <label htmlFor="magazine">Magazine</label> <br />
            <input type="checkbox" id="stickers" name="category" value="stickers" checked={filters.category.includes("stickers")}
              onChange={(e) => {
                const category = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  category: e.target.checked
                    ? [...prevFilters.category, category]
                    : prevFilters.category.filter((c) => c !== category),
                }));
              }}
            />
            <label htmlFor="stickers">Stickers</label> <br />
            <input type="checkbox" id="merchandise" name="category" value="merchandise" checked={filters.category.includes("merchandise")}
              onChange={(e) => {
                const category = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  category: e.target.checked
                    ? [...prevFilters.category, category]
                    : prevFilters.category.filter((c) => c !== category),
                }));
              }}
            />
            <label htmlFor="merchandise">Store Merchandise</label>
            <br />
            <br />
          </div>
          <div className="age">
            <legend>Age</legend>
            <input type="checkbox" id="children" name="age" value="children" checked={filters.age.includes("children")}
              onChange={(e) => {
                const age = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  age: e.target.checked
                    ? [...prevFilters.age, age]
                    : prevFilters.age.filter((c) => c !== age),
                }));
              }}
            />
            <label htmlFor="children">Children</label> <br />
            <input type="checkbox" id="teen" name="age" value="teen" checked={filters.age.includes("teen")}
              onChange={(e) => {
                const age = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  age: e.target.checked
                    ? [...prevFilters.age, age]
                    : prevFilters.age.filter((c) => c !== age),
                }));
              }}
            />
            <label htmlFor="teen">Teen</label> <br />
            <input type="checkbox" id="young" name="age" value="young" checked={filters.age.includes("young")}
              onChange={(e) => {
                const age = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  age: e.target.checked
                    ? [...prevFilters.age, age]
                    : prevFilters.age.filter((c) => c !== age),
                }));
              }}
            />
            <label htmlFor="young">Young Adult</label> <br />
            <input type="checkbox" id="adult" name="age" value="adult" checked={filters.age.includes("adult")}
              onChange={(e) => {
                const age = e.target.value;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  age: e.target.checked
                    ? [...prevFilters.age, age]
                    : prevFilters.age.filter((c) => c !== age),
                }));
              }}
            />
            <label htmlFor="adult">Adult</label> <br />
            <br />
          </div>
          <button type="submit" onClick={() => handleApply(filters)}>APPLY</button>

        </form>
      )}
    </>
  );
}

export default Filter;
