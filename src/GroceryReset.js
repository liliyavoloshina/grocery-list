import React, { Component } from 'react'

export class GroceryReset extends Component {
  handleReset() {
    this.props.onReset()
  }
  render() {
    return <div className="grocery-reset">
      <button onClick={() => this.handleReset()} className="grocery-reset__btn">Reset</button>
    </div>
  }
}

export default GroceryReset
