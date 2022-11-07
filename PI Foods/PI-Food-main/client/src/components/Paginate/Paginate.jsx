import React from "react";
import "./Pagination.css";

function Paginate({
  recipesPerPage,
  recipes,
  paginado,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(recipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  function handleNext() {
    if (currentPage < 12) {
      if (currentPage > 0) {
        setCurrentPage(currentPage + 1);
      }
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      if (currentPage <= 12) {
        setCurrentPage(currentPage - 1);
      }
    }
  }

  return (
    <div className="pagination">
      <button onClick={() => handlePrev()}>Prev</button>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paginado(number)} key={number}>
            {number}
          </button>
        ))}
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
}

export default Paginate;
