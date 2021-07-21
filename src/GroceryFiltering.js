import React from 'react'

class GroceryFiltering extends React.Component {
  handleFilterText(e) {
    this.props.onFilterText(e.target.value)
  }
  handleFilterBought() {
    this.props.onFilterBought(!this.props.filterBought)
  }
  render() {
    return (
      <div className="grocery-navbar__input">
        <input
          onChange={e => this.handleFilterText(e)}
          className="grocery-navbar__input-filtering"
          placeholder="Search..."
        />
        <div className="grocery-navbar__wrapper-bought">
          <label htmlFor="only-bougth" className="grocery-navbar__label-bought">
            Only bought
          </label>
          <input
            onChange={() => this.handleFilterBought()}
            className="grocery-navbar__input-bought"
            id="only-bougth"
            type="checkbox"
          />
        </div>
      </div>
    )
  }
}

export default GroceryFiltering
