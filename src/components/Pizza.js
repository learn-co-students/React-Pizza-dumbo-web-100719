import React, { Component } from "react";

const Pizza = props => {
  // console.log(props);
  const { pizza, handleSelectPizza, handleClicked } = props;
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleSelectPizza(pizza);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
