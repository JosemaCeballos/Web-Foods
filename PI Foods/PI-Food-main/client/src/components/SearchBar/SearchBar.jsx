import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllRecipesByName,
} from "../../redux/actions/index";
import "./Searchbar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(evt) {
    evt.preventDefault();
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if(name){
      dispatch(getAllRecipesByName(name));
      setName("");
    }
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
        <button type="submit" className="form-submit-search" onClick={(evt) => handleSubmit(evt)}>
          Search!
        </button>
      </div>
    </>
  );
}

export default SearchBar;
