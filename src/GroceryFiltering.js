import React from 'react'

class GroceryFiltering extends React.Component {
  handleFilterText(e) {
    this.props.onFilterText(e.target.value)
  }
  handleFilterBought(e) {
    console.log(e)
    // this.props.onFilterText(e.target.value)
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
          <label for="only-bougth" className="grocery-navbar__label-bought">
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
