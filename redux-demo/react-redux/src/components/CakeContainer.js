import React from "react";
import { buyCake } from "../redux";

export default function CakeContainer() {
  return (
    <div>
      <h2>Number of Cakes</h2>
      <button>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
