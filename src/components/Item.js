import React, { Component } from 'react';
import '../App.css';

class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.onMinusClick}>-</button>
        <span>{this.props.value}</span>
        <button onClick={this.props.onAddClick}>+</button>
      </div>
    );
  }
}

export default Item;
