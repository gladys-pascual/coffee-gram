import React, { Component } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Dropdown from './Components/Dropdown'
import CardList from './Components/CardList';
import Footer from './Components/Footer'
import coffeeList from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'success',
      coffeeList: [],
    }
  }

  componentDidMount = () => {
    this.setState({ coffeeList: coffeeList })
  }

  handleCoffeeChoice = (event) => {
    this.setState({ selection: event.target.value })
  }

  chooseCoffee = () => {
    let matchedCoffee;
    if (this.state.selection === 'success') {
      matchedCoffee = this.state.coffeeList.filter(coffee => coffee.success === true)
      matchedCoffee.sort((a, b) => b.date - a.date)
    } else if (this.state.selection === 'all') {
      matchedCoffee = this.state.coffeeList;
    }
    else {
      matchedCoffee = this.state.coffeeList.filter(coffee => coffee.type === this.state.selection)
      matchedCoffee.sort((a, b) => b.date - a.date)
    }
    return matchedCoffee;
  }

  render() {
    return (
      <section className="app">
        <Heading />

        <Dropdown
          heading={"Choose your art:"}
          options={[
            { label: 'Successful Arts', value: 'success' },
            { label: 'Unsuccessful Blobs', value: 'blob' },
            { label: 'Hearts', value: 'heart' },
            { label: 'Tulips', value: 'tulip' },
            { label: 'All', value: 'all' }
          ]}
          handleChoice={this.handleCoffeeChoice}
        />
        <CardList coffee={this.chooseCoffee()} />
        <Footer />
      </section>
    );
  }
}

export default App;
