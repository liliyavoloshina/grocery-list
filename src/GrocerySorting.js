import React from 'react'

class GrocerySorting extends React.Component {
  handleSortByAmount() {
    this.props.onSortByAmount(!this.props.sortByAmount)
  }
  render() {
    return (
      <div className="grocery-sorting">
        <button
          onClick={() => this.handleSortByAmount()}
          className="grocery-sorting__btn"
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
