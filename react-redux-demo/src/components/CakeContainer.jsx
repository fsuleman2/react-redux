import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import Example from "./Example";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <h3>Num of cakes from Example :</h3>
      <Example/>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
//for accessing
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
//for updating 
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
//connecting react comp with store

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
