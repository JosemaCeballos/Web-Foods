import React, { Component } from "react";
import MenuCard from "../MenuCard/MenuCard";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

export class Menu extends Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    return (
      <div>
        <h1>Henry Recipes</h1>
        {this.props.recipes &&
          this.props.recipes.map((el) => (
            <MenuCard
              key={el.id}
              id={el.id ? el.id : el.idApi}
              name={el.name}
              image={el.image}
              types={el.types.map((type) => type)}
            />
          ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    getAllRecipes: () => dispatch(actions.getAllRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
