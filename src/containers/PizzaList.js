import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  
  renderPizza =() =>{

  return this.props.pizzas.map(pizza => <Pizza pizza = {pizza} key ={pizza.id} editPizza ={this.props.editPizza} />)
}

  render() {
    //console.log(this.props.pizzas)
    

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
           // this.props.pizzas.map(pizza => <Pizza pizza = {pizza} key ={pizza.id}/>)
           this.renderPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
