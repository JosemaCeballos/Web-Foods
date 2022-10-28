import React, { Component } from "react";
import MenuCard from "../MenuCard/MenuCard";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
import './Menu.css'

export class Menu extends Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    return (
      <div className="card-god">
        {this.props.recipes &&
          this.props.recipes.map((el) => (
            <MenuCard
              key={el.idApi || el.id}
              id={el.id ? el.id : el.idApi}
              name={el.name}
              image={el.image}
              types={el.types?.map((type) => type) || "Your Diet :D"}
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
