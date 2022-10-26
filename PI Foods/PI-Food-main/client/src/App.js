import { Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import About from "./components/About/About";
import RecipeDetail from "./components/RecipeDetails/RecipeDetail"
import "./App.css";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Route exact path="/" component={Menu} />
        <Route exact path="/recipe/:id" component={RecipeDetail} />
        <Route exact path="/recipe/create" component={CreateRecipe} />
        <Route exact path="/about" component={About} />
      </div>
    </div>
  );
}

export default App;
