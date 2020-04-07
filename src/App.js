import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.minusNumber = this.minusNumber.bind(this);
    this.addNumber = this.addNumber.bind(this);
  }
  minusNumber() {
    this.setState({ value: this.state.value - 1 });
  }
  addNumber() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div className='App'>
        <Item
          onAddClick={this.addNumber}
          onMinusClick={this.minusNumber}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
