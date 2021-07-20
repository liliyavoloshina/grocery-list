import React from 'react'
import './css/style.css'
// import data from './data.json'
import GroceryList from './GroceryList'
import GrocerySorting from './GrocerySorting'
import GroceryFiltering from './GroceryFiltering'
import GroceryNew from './GroceryNew'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
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

  handleStateItems() {
    const data = JSON.parse(localStorage.getItem('grocery-items'))
    this.setState({
      items: data
    })
  }

  handleStateAddNewItem(newItem) {
    const updatedState = this.state.items.concat(newItem)
    localStorage.setItem('grocery-items', JSON.stringify(updatedState))
    this.setState({
      items: updatedState
    })
  }

  componentDidMount() {
    this.handleStateItems()
  }

  render() {
    return (
      <div className="app">
        <GroceryNew itemsLength={this.state.items.length} onAddNewItem={newItem => this.handleStateAddNewItem(newItem)} />
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
          products={this.state.items}
          sortByPriority={this.state.sortByPriority}
          sortByAmount={this.state.sortByAmount}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}

export default App
