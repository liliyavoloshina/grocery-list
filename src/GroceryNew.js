import React, { Component } from 'react'

export class GroceryNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItemName: '',
      newItemAmount: 0
    }
  }

  handleNewItemName(e) {
    this.setState({
      newItemName: e.target.value
    })
  }

  handleNewItemAmount(e) {
    this.setState({
      newItemAmount: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onAddNewItem({
      id: this.props.itemsLength + 1,
      name: this.state.newItemName,
      amount: this.state.newItemAmount,
      bought: false
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} className="grocery-navbar">
        <div className="grocery-navbar__input">
          <input
            onChange={e => this.handleNewItemName(e)}
            value={this.state.newItemName}
            className="grocery-navbar__input-name"
            placeholder="Add new item..."
          />
          <input
            type="number"
            onChange={e => this.handleNewItemAmount(e)}
            value={this.state.newItemAmount}
            className="grocery-navbar__input-amount"
            placeholder="How much?"
          />
        </div>
        <div className="grocery-navbar__btn">
          <button type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </form>
    )
  }
}

export default GroceryNew
