import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas : [],
    selectedPizza: {}
  }

  editPizza = (pizzaObj) => {
    this.setState({
      selectedPizza : pizzaObj
    })
  }

  handleType = (typedVal) => {
    this.setState((prevState) => {
      return {
        selectedPizza : {...prevState.selectedPizza, topping: typedVal}
      }
    })
  }

  handleSelect = (newSize) => {
    this.setState((prevState) => {
      return {
        selectedPizza: {...prevState.selectedPizza, size: newSize}
      }
    })
  }

  onRadioButton = (event) => {
    const isVeg = event.target.value === "Vegetarian"
    this.setState((prevState) => {
      return {
        selectedPizza : {...prevState.selectedPizza, vegetarian : isVeg}
      }
    })
  }

  handleSubmit = (pizzaInfo) => {
    const {id} = pizzaInfo
    if (this.state.selectedPizza.id) {
      fetch(`http://localhost:3000/pizzas/${id}`, {
        method:'PATCH',
       headers: { 
           'Content-type': 'application/json',
           'accept': 'application/json'
       },
       body: JSON.stringify(this.state.selectedPizza)
      })
      .then(resp => resp.json())
      .then(pizzaObj => {
        const newArray = this.state.pizzas.map((pizza) => {
          if (pizza.id === id) {
            return pizzaObj
          } else {
            return pizza
          }
        })

        this.setState((prevState) => {
          return {
            pizzas: newArray 
          }
        })
      })
    }
  }
  
  
  
  

  componentDidMount(){
    fetch(`http://localhost:3000/pizzas`)
    .then(resp => resp.json())
    .then(json_resp => {
      this.setState({pizzas: json_resp})
    })
  }
  
  render() {
    console.log(this.state.selectedPizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} handleType={this.handleType} handleSelect={this.handleSelect} onRadioButton={this.onRadioButton} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
