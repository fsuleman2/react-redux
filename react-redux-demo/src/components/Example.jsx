import React from "react";
import { connect } from "react-redux";

function Example(props) {
  return <div>Example {props.numOfCakes}</div>;
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

export default connect(mapStateToProps)(Example);
