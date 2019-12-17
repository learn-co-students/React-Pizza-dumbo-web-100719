import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const url = "http://localhost:3000/pizzas";

class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {},
    clicked: false
  };

  handleSelectPizza = pizza => {
    console.log(pizza, this.state.clicked);
    this.setState({
      selectedPizza: pizza
    });
  };

  handleToppingChange = event => {
    const pizzaTopping = event.target.value;
    this.setState(prevState => {
      return {
        selectedPizza: {
          ...prevState.selectedPizza,
          topping: pizzaTopping
        }
      };
    });
  };

  handleDropDown = event => {
    const pizzaSize = event.target.value;
    this.setState(prevState => {
      return {
        selectedPizza: { ...prevState.selectedPizza, size: pizzaSize }
      };
    });
  };

  handleRadioButton = event => {
    const pizzaVegetarian = event.target.value === "Vegetarian" ? true : false;
    this.setState(prevState => {
      return {
        selectedPizza: {
          ...prevState.selectedPizza,
          vegetarian: pizzaVegetarian
        }
      };
    });
  };

  submitForm = () => {
    if (this.state.selectedPizza.id) {
      const { id } = this.state.selectedPizza;
      fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(this.state.selectedPizza)
      })
        .then(resp => resp.json())
        .then(pizzaObj => {
          const newPizzas = this.state.pizzas.map(pizza => {
            if (pizza.id === id) {
              return pizzaObj;
            } else {
              return pizza;
            }
          });
          this.setState({
            pizzas: newPizzas
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      fetch(`${url}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(this.state.selectedPizza)
      })
        .then(resp => resp.json())
        .then(pizzaObj => {
          console.log(pizzaObj);
          this.setState(prevState => {
            return {
              pizzas: [...prevState.pizzas, pizzaObj]
            };
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  handleClicked = () => {
    console.log(this.state.clicked);
    this.setState(prevState => ({
      clicked: !prevState
    }));
  };

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(pizzas =>
        this.setState({
          pizzas: pizzas
        })
      )
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // console.log(this.state.pizzas);
    // console.log(this.state.disabled);
    console.log(this.state.selectedPizza);
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.selectedPizza}
          handleToppingChange={this.handleToppingChange}
          handleDropDown={this.handleDropDown}
          handleRadioButton={this.handleRadioButton}
          submitForm={this.submitForm}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleSelectPizza={this.handleSelectPizza}
          handleClicked={this.handleClicked}
          clicked={this.state.clicked}
        />
      </Fragment>
    );
  }
}

export default App;
