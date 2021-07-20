import React from 'react'
import './css/style.css'
import data from './data.json'
import GroceryList from './GroceryList'
import GrocerySorting from './GrocerySorting'
import GroceryFiltering from './GroceryFiltering'
import GroceryNew from './GroceryNew'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortByAmount: false,
      filterText: ''
    }
  }
  handleStateSortByAmount(sort) {
    this.setState({
      sortByAmount: sort
    })
  }
  handleStateFilterText(text) {
    this.setState({
      filterText: text
    })
  }

  render() {
    return (
      <div className="app">
        <GroceryNew />
        <div className="grocery-navbar">
          <GroceryFiltering
            onFilterText={text => this.handleStateFilterText(text)}
          />
          <GrocerySorting
            onSortByAmount={sort => this.handleStateSortByAmount(sort)}
            sortByAmount={this.state.sortByAmount}
          />
        </div>
        <GroceryList
          products={data}
          sortByPriority={this.state.sortByPriority}
          sortByAmount={this.state.sortByAmount}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}

export default App
