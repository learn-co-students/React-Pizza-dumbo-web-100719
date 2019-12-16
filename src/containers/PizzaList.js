import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = () => {
    return this.props.pizzas.map(pizza => <Pizza pizza = {pizza} grabPizza = {this.props.grabPizza}/>)
  }
  

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
