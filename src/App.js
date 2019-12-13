import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


state = {
  currentPizzas: [],
  allPizzas: [],
  pizzaToBeEdited: {}
}

componentDidMount(){
  fetch(`http://localhost:3000/pizzas`)
  .then(resp => resp.json())
  .then(pizzasArr => {
    this.setState({currentPizzas: pizzasArr, allPizzas: pizzasArr})
  })
}

componentDidUpdate(){
  fetch(`http://localhost:3000/pizzas`)
  .then(resp => resp.json())
  .then(pizzasArr => {
    this.setState({currentPizzas: pizzasArr, allPizzas: pizzasArr})
  })
}

grabPizza = (pizzaObj) => {
  this.setState({
    pizzaToBeEdited: pizzaObj
  })
}

onChange = (event) => {
  this.setState({
    pizzaToBeEdited: {...this.state.pizzaToBeEdited, [event.target.name]: event.target.value}
  })
}

savePizza = () => {
  fetch(`http://localhost:3000/pizzas/${this.state.pizzaToBeEdited.id}`, {
    method:'PATCH',
   headers: { 
       'Content-type': 'application/json',
       'accept': 'application/json'
   },
   body: JSON.stringify({
  topping: this.state.pizzaToBeEdited.topping,
  size: this.state.pizzaToBeEdited.size,
  vegetarian: this.state.pizzaToBeEdited.vegetarian
    })
  })
  .then(resp => resp.json())
  .then(json_resp => console.log(json_resp))
}



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza= {this.state.pizzaToBeEdited} onChange= {this.onChange} savePizza = {this.savePizza}/>
        <PizzaList pizzas = {this.state.currentPizzas} grabPizza = {this.grabPizza}/>
      </Fragment>
    );
  }
}

export default App;
