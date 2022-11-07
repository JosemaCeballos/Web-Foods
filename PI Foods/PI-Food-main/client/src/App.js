import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import About from "./components/About/About";
import RecipeDetail from "./components/RecipeDetails/RecipeDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="Landing">
        <Route exact path="/" component={LandingPage} />
      </div>
      <div className="App">
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipe/:id" component={RecipeDetail} />
        <Route path="/create/recipe" component={CreateRecipe} />
        <Route exact path="/about" component={About} />
      </div>
    </>
  );
}

export default App;
