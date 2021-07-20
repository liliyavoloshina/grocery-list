import React from 'react'

class GrocerySorting extends React.Component {
  handleSortByAmount() {
    this.props.onSortByAmount(!this.props.sortByAmount)
  }
  render() {
    return (
      <div className="grocery-navbar__btn">
        <button
          onClick={() => this.handleSortByAmount()}
        >
          {this.props.sortByAmount ? (
            <i className="fas fa-sort-numeric-up-alt"></i>
          ) : (
            <i className="fas fa-sort-numeric-down"></i>
          )}
        </button>
      </div>
    )
  }
}

export default GrocerySorting
