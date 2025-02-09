import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";
import HooksCakeContainer from "./HooksCakeContainer";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of IceCream: {props.numOfIceCreams}</h2>
      {/* <h3>Num of cakes from Example :</h3>
      <Example/> */}
      {/* <HooksCakeContainer/> */}
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
}
//for accessing
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};
//for updating
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
//connecting react comp with store

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
