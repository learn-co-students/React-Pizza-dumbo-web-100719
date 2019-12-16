import React from "react";

const PizzaForm = props => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          name="topping"
          className="form-control"
          placeholder={
            // props.pizza.topping !== ""
            //   ? "Pizza topping" :
            props.pizza.topping
          }
          value={null}
          onChange={event => props.handleOnChange(event)}
        />
      </div>
      <div className="col">
        <select
          value={null}
          className="form-control"
          name="size"
          onChange={event => props.handleOnChange(event)}
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
            name="vegetarian"
            checked={null}
            onChange={event => props.handleOnChange(event)}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={null}
            name="vegetarian"
            onChange={event => props.handleOnChange(event)}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={console.log}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
