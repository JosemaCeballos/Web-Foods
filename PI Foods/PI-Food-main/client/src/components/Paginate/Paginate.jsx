import React from "react";
import "./Pagination.css";

function Paginate({
  recipesPerPage,
  recipes,
  paginado,
  currentPage, 
  setCurrentPage
}) {

  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(recipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
 
  return (
    <div className="pagination">
      <button>Prev</button>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paginado(number)} key={number}>
            {number}
          </button>
        ))}
      <button>Next</button>
    </div>
  );
}

export default Paginate;
