import React, { Component } from 'react'

export class GroceryNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ''
    }
  }
  
  handleNewItem(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onAddNewItem({
      id: this.props.itemsLength + 1,
      name: this.state.newItem,
      amount: 1,
      bougth: false
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} className="grocery-navbar">
        <div className="grocery-navbar__input">
          <input
            onChange={e => this.handleNewItem(e)}
            value={this.state.newItem}
            placeholder="Add new item..."
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
