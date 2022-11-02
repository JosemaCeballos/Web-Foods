import {
  filterByOrder,
  getFilterByDiets,
  orderByScore,
  getAllRecipes,
} from "../../redux/actions/index.js";
import React from "react";
import { useDispatch } from "react-redux";
import "./Filters.css";

function Filters({ setOrder, setCurrentPage, recipes }) {
  const dispatch = useDispatch();

  function handleFilterByOrder(evt) {
    evt.preventDefault();
    dispatch(filterByOrder(evt.target.value));
    setCurrentPage(1);
    setOrder(`${evt.target.value}`);
  }
  function handleFilterByDiets(evt) {
    evt.preventDefault();
    dispatch(getFilterByDiets(evt.target.value));
    setCurrentPage(1);
    setOrder(`${evt.target.value}`);
  }
  function handleOrderByScore(evt) {
    evt.preventDefault();
    dispatch(orderByScore(evt.target.value));
    setCurrentPage(1);
    setOrder(`${evt.target.value}`);
  }
  function handleClearFilter(evt) {
    evt.preventDefault();
    setCurrentPage(1)
    dispatch(getAllRecipes());
  }

  return (
    <div>
      <div className="div-grid">
        <select
          defaultValue="Filter by Order"
          onChange={(event) => handleFilterByOrder(event)}
          className="form-selected"
        >
          <option>Filter by Order</option>
          <option key="up" value="up">
            A-Z
          </option>
          <option key="down" value="down">
            Z-A
          </option>
        </select>
        <select
          defaultValue="Filter by type"
          onChange={(event) => handleFilterByDiets(event)}
          className="form-selected"
        >
          <option>Filter by type</option>
          <option key="gluten free" name="gluten free">
            gluten free
          </option>
          <option key="pescatarian" name="pescatarian">
            pescatarian
          </option>
          <option key="whole 30" name="whole 30">
            whole 30
          </option>
          <option key="dairy free" name="dairy free">
            dairy free
          </option>
          <option key="primal" name="primal">
            primal
          </option>
          <option key="lacto ovo vegetarian" name="lacto ovo vegetarian">
            lacto ovo vegetarian
          </option>
          <option key="fodmap friendly" name="fodmap friendly">
            fodmap friendly
          </option>
          <option key="vegan" name="vegan">
            vegan
          </option>
          <option key="ketogenic" name="ketogenic">
            ketogenic
          </option>
          <option key="paleolithic" name="paleolithic">
            paleolithic
          </option>
        </select>
        <select
          className="form-selected"
          defaultValue="Order by score"
          onChange={(event) => handleOrderByScore(event)}
        >
          <option>Order by Health Score</option>
          <option key="Hsc" value="Hsc">
            Health Score Asc
          </option>
          <option key="Dsc" value="Dsc">
            Health Score Desc
          </option>
        </select>
      </div>
      <div className="button-down">
        <button
          key="clean"
          value="clean"
          onClick={(event) => handleClearFilter(event)}
          className="button-style"
        >
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
}

export default Filters;
