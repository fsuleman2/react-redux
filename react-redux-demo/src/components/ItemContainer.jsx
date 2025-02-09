import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>buy items</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
/**
 * ownProps: This parameter represents the props that were passed to the component itself.
 *  It's useful when you need to access the component's own props to determine what part of the state to pass down as props.
 */
