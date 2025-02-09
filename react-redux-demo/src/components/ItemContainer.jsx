import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
/**
 * ownProps: This parameter represents the props that were passed to the component itself.
 *  It's useful when you need to access the component's own props to determine what part of the state to pass down as props.
 */