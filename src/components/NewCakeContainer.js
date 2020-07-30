import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>Number Of Cakes - {props.numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
