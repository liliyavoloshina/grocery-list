import React, { Component } from 'react'

export class GroceryNew extends Component {
  onSubmit() {
    console.log('work')
  }
  render() {
    return (
      <form onSubmit={() => this.onSubmit()} className="grocery-navbar">
        <div className="grocery-navbar__input">
          <input placeholder="Add new item..." />
        </div>
        <div className="grocery-navbar__btn">
          <button>
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </form>
    )
  }
}

export default GroceryNew
