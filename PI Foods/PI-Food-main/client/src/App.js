import { Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import About from "./components/About/About";
import RecipeDetail from "./components/RecipeDetails/RecipeDetail";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Route exact path="/" component={Menu} />
        <Route exact path="/recipe/:id" component={RecipeDetail} />
        <Route path="/create/recipe" component={CreateRecipe} />
        <Route exact path="/about" component={About} />
  
    </div>
  );
}

export default App;
