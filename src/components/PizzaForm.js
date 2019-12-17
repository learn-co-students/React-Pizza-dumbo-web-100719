import React from "react";

const PizzaForm = props => {
  const {
    pizza,
    handleToppingChange,
    handleDropDown,
    handleRadioButton,
    submitForm
  } = props;

  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={pizza.topping}
          onChange={handleToppingChange}
        />
      </div>
      <div className="col">
        <select
          value={pizza.size}
          className="form-control"
          onChange={handleDropDown}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={pizza.vegetarian}
            onChange={handleRadioButton}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={!pizza.vegetarian}
            onChange={handleRadioButton}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
