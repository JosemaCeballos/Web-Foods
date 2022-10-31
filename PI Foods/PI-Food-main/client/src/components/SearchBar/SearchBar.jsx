import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllRecipesByName,
  filterBySearchBar,
} from "../../redux/actions/index";
import "./Searchbar.css"

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(evt) {
    evt.preventDefault();
    setName(evt.target.value);
    dispatch(filterBySearchBar(evt.target.value));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (name) {
      dispatch(getAllRecipesByName(name));
    }
    setName("");
  }

  return (
    <>
      <div className="center">
      <input
        className="form-input-search-bar"
        type="text"
        placeholder="Search Recipe..."
        onChange={(evt) => handleInput(evt)}
      />
    </div>
      <button type="submit" onClick={(evt) => handleSubmit(evt)}>
        Search!
      </button>
    </>
  );
}

export default SearchBar;
