import React from 'react'
import './css/style.css'
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
      filterText: '',
      filterBought: false
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
    let updatedState
    if (this.state.items) {
      updatedState = this.state.items.slice()
      updatedState.unshift(newItem)
    } else {
      updatedState = [newItem]
    }
    localStorage.setItem('grocery-items', JSON.stringify(updatedState))
    this.setState({ items: updatedState })
  }

  handleBoughtItem(item) {
    const changedState = this.state.items.map(oldItem =>
      oldItem.id === item.id ? { ...oldItem, bought: !oldItem.bought } : oldItem
    )
    localStorage.setItem('grocery-items', JSON.stringify(changedState))
    this.setState({ items: changedState })
  }

  handleStateFilterBought(bought) {
    this.setState({
      filterBought: bought
    })
  }

  componentDidMount() {
    this.handleStateItems()
  }

  render() {
    return (
      <div className="app">
        <GroceryNew
          itemsLength={this.state.items ? this.state.items.length : 0}
          onAddNewItem={newItem => this.handleStateAddNewItem(newItem)}
        />
        <div className="grocery-navbar">
          <GroceryFiltering
            onFilterText={text => this.handleStateFilterText(text)}
            onFilterBought={bought => this.handleStateFilterBought(bought)}
            filterBought={this.state.filterBought}
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
          filterBought={this.state.filterBought}
          onBoughtItem={item => this.handleBoughtItem(item)}
        />
      </div>
    )
  }
}

export default App
