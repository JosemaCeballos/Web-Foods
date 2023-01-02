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
    if (currentPage < Math.ceil(recipes / recipesPerPage)) {
      if (currentPage > 0) {
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage === Math.ceil(recipes / recipesPerPage)){
      setCurrentPage(1)
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      if (currentPage <= Math.ceil(recipes / recipesPerPage)) {
        setCurrentPage(currentPage - 1);
      }
    }
    if (currentPage === 1){
      setCurrentPage(Math.ceil(recipes / recipesPerPage))
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
