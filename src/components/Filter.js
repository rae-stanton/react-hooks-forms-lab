import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [filterItems, setFilterItems] = useState('');

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={filterItems}
        onChange={(e) => setFilterItems(e.target.value)} // Added onChange event handler
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

//new input for searching
// when user types, should filter items with matching names
// make controlled value input
// connct input to state - prop called onSearchChange
