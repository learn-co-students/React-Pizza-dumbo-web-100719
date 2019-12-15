import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizzaToEdit: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(pizzas => this.setState({ pizzas }))
      .catch(err => console.log(err))
  }

  handleEditButton = (pizza) => {
    // console.log(pizza)
    this.setState({pizzaToEdit: pizza})
  }

  onType = (event) => {
    // console.log(event.target.value)
    const pizzaName = event.target.value
    this.setState((prevState) => {
      return {pizzaToEdit: {...prevState.pizzaToEdit, topping: pizzaName}}
    })
  }
  
  onDropdown = (event) => {
    const pizzaSize = event.target.value
    this.setState((prevState) => {
      return {pizzaToEdit: {...prevState.pizzaToEdit, size: pizzaSize}}
    })
  }
    
  onRadioButton = (event) => {
    const pizzaVeg = event.target.value === "Vegetarian"
    // console.log(pizzaVeg)
    this.setState((prevState) => {
      return {pizzaToEdit: {...prevState.pizzaToEdit, vegetarian: pizzaVeg}}
    })
  }

  handleSubmit = () => {
    if (this.state.pizzaToEdit.id) {
      const pizzaId = this.state.pizzaToEdit.id
      fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
        method:'PATCH',
        headers: { 
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(this.state.pizzaToEdit)
      })
        .then(r => r.json())
        .then(pizzaObj => {
          const newPizzaArray = this.state.pizzas.map((pizza) => {
            if (pizza.id === pizzaObj.id){
              return pizzaObj
            } else {
              return pizza
            }
          })
          this.setState({pizzas: newPizzaArray})
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    console.log(this.state.pizzaToEdit)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.pizzaToEdit}
          onType={this.onType}
          onDropdown={this.onDropdown}
          handleSubmit={this.handleSubmit}
          onRadioButton={this.onRadioButton}
        />
        <PizzaList 
          pizzas={this.state.pizzas} 
          handleEditButton={this.handleEditButton} 
        />
      </Fragment>
    );
  }
}

export default App;

//getPizzaTopping={}