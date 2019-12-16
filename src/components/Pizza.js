import React from "react"

const Pizza = (props) => {

  const {topping, size, vegetarian} = props.pizza

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Totes Veggie" : "Not Veggie At All"}</td>
      <td><button type="button" className="btn btn-primary"
      onClick={()=> props.grabPizza(props.pizza)}
      >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
