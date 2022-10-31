import React from "react";
import "./Pagination.css";

function Paginate({ recipesPerPage, recipes, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(recipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="pagination">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paginado(number)} key={number}>
            {number}
          </button>
        ))}
    </div>
  );
}

export default Paginate;
