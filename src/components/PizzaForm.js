import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.pizza
 
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name= "topping"
             onChange= {props.onChange}
             value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control"
          name = "size"
          onChange= {props.onChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value= "true"
              onChange= {props.onChange}
             checked={vegetarian? true: false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value= "false" 
            onChange= {props.onChange}
            checked={vegetarian? false: true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.savePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
