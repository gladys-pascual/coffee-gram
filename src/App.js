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



  // handleDateChoice = (event) => {
  //   this.setState({ selection: event.target.value })
  // }

  // chooseDate = () => {
  //   let selectedCoffee;
  //   if (this.state.selection === 'all') {
  //     selectedCoffee = this.state.coffeeList
  //   } else if (this.state.selection === 'Jul - Sep 2019') {
  //     selectedCoffee = this.state.coffeeList.filter(coffee => {
  //       return coffee.date >= 1561935600000 && coffee.date <= 1569884399000
  //     })
  //   }
  //   else if (this.state.selection === 'Oct - Dec 2019') {
  //     selectedCoffee = this.state.coffeeList.filter(coffee => {
  //       return coffee.date >= 1569884400000 && coffee.date <= 1577836799000
  //     })
  //   }
  //   return selectedCoffee;
  // }

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
        {/* <Dropdown
          heading={"Choose your timeline"}
          options={[
            { label: 'All', value: 'all' },
            { label: 'Jul - Sep 2019', value: 'Jul - Sep 2019' },
            { label: 'Oct - Dec 2019', value: 'Oct - Dec 2019' },
            { label: 'Jan - Mar 2020', value: 'Jan - Mar 2020' },
            { label: 'Apr - June 2020', value: 'Apr - June 2020' }
          ]}
          handleChoice={this.handleDateChoice}
        /> */}

        <CardList coffee={this.chooseCoffee()} />
        <Footer />
      </section>
    );
  }
}

export default App;
