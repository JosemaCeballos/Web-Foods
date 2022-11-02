import React, { useState, useEffect } from "react";
import MenuCard from "../MenuCard/MenuCard";
import Filters from "../Filters/Filters.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets } from "../../redux/actions/index";
import "./Home.css";
import Paginate from "../Paginate/Paginate";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <Filters setOrder={setOrder} setCurrentPage={setCurrentPage} recipes={recipes} />
      <Paginate
        recipesPerPage={recipesPerPage}
        recipes={recipes.length}
        paginado={paginado}
      />
      <div className="card-god">
        {recipes.length > 0 ? (
          currentRecipes?.map((el) => (
            <MenuCard
              key={el.idApi || el.id}
              id={el.id || el.idApi}
              name={el.name}
              image={el.image}
              types={el.diets ? el.diets : el.types}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Home;
