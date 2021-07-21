import React from 'react'

class GroceryFiltering extends React.Component {
  handleFilterText(e) {
    console.log(e.target.value)
    this.props.onFilterText(e.target.value)
  }
  render() {
    return (
      <div className="grocery-navbar__input">
        <input onChange={(e) => this.handleFilterText(e)} className="grocery-navbar__input-filtering" placeholder="Search..." />
      </div>
    )
  }
}

export default GroceryFiltering