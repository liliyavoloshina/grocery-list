import React from 'react'
import './css/style.css'
import data from './data.json'
import GroceryList from './GroceryList'
import GrocerySorting from './GrocerySorting'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortByPriority: false
    }
  }

  handleStateSortByPriority(sort) {
    this.setState({
      sortByPriority: sort
    })
  }

  render() {
    return (
      <div className="app">
        <GrocerySorting
          onSortByPriority={sort => this.handleStateSortByPriority(sort)}
          sortByPriority={this.state.sortByPriority}
        />
        <GroceryList
          products={data}
          sortByPriority={this.state.sortByPriority}
        />
      </div>
    )
  }
}

export default App
