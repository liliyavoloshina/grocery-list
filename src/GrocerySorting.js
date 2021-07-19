import React from 'react'
class GrocerySorting extends React.Component {
  handleSortByPriority() {
    this.props.onSortByPriority(!this.props.sortByPriority)
  }
  render() {
    return (
      <div className="grocery-sorting">
        <button onClick={() => this.handleSortByPriority()}>Sort by Priority</button>
      </div>
    )
  }
}

export default GrocerySorting
