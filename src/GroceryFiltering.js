import React from 'react'

class GroceryFiltering extends React.Component {
  handleFilterText(e) {
    console.log(e.target.value)
    this.props.onFilterText(e.target.value)
  }
  render() {
    return (
      <div className="grocery-filtering">
        <input onChange={(e) => this.handleFilterText(e)} className="grocery-filtering__input" placeholder="Search..." />
      </div>
    )
  }
}

export default GroceryFiltering