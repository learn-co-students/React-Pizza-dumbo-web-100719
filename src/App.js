import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    editPizza: {}
  };

  // changePizzaState = (arg) => {
  //   this.setState({
  //     pizzas: arg
  //   })
  // }
  // use map to mutate

  componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
      .then(resp => resp.json())
      // .then(pizzasArray => {this.changePizzaState(pizzasArray)} );
      .then(pizzasArray => {
        this.setState({
          pizzas: pizzasArray
        });
      });
  }

  editPizzaObj = pizzaObj => {
    // console.log(pizzaObj);
    this.setState({
      editPizza: pizzaObj
    });
  };

  submitPizzaObj = event => {
    console.log({
      ...this.state.editPizza,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name, event.target.value);
  };

  render() {
    console.log(this.state.editPizza);
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.editPizza}
          handleOnChange={this.submitPizzaObj}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          editPizzaObj={this.editPizzaObj}
        />
      </Fragment>
    );
  }
}

export default App;
