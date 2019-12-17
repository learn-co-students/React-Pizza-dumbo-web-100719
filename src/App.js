import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state ={
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then((pizzaArray) => {
     // console.log(pizzaArray) 
     this.setState({
       pizzas: pizzaArray
     })
    })
  }

  editPizza =(pizzaObj) => {
    //console.log(pizzaObj)
    this.setState({
      selectedPizza: pizzaObj
    })

  }

  onType =(event) =>{
    const pizzaTopping= event.target.value
    this.setState((previousState) => {
      return {selectedPizza: {...previousState.selectedPizza, topping: pizzaTopping}}
    })
  }
  onDropdown = (event) =>{
    //console.log(event.target.value)
    const pizzaSize = event.target.value
    this.setState((previousState)=>{
      return {selectedPizza: {...previousState.selectedPizza, size: pizzaSize}}
    })
    
  }

  onRadioButton = (event) =>{
    const isVeg = event.target.value === "Vegetarian"
    this.setState((previousState) => {
      return {selectedPizza: {...previousState.selectedPizza, vegetarian: isVeg}}
    })

  }

  handleSubmit = (event) => {
    if(this.state.selectedPizza.id){
      const pizzaId = this.state.selectedPizza.id
    fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
      method:'PATCH',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify(this.state.selectedPizza)
    })
    .then(resp => resp.json())
    .then(pizzaObj => {
      const newPizzaArray = this.state.pizzas.map(pizza =>{
        if(pizza.id === pizzaId){
          return pizzaObj
        }
        else{
          return pizza
        }
      })
      this.setState({
        pizzas: newPizzaArray
      })
    })
    }

  }
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit = {this.state.selectedPizza} onType ={this.onType} onDropdown = {this.onDropdown} onRadioButton ={this.onRadioButton} handleSubmit = {this.handleSubmit}/>
        <PizzaList pizzas = {this.state.pizzas} editPizza ={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
