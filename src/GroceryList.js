import React from 'react'
import './css/style.css'
import GroceryItem from './GroceryItem'
class GroceryList extends React.Component {
  handleBoughtItem(e) {
    this.props.onBoughtItem(e)
  }
  render() {
    const sortByAmount = this.props.sortByAmount
    const filterText = this.props.filterText
    const filterBought = this.props.filterBought
    let sorted = []
    const products = []
    if (this.props.products) {
      if (sortByAmount) {
        sorted = this.props.products.sort((a, b) => {
          return a.amount - b.amount
        })
      } else {
        sorted = this.props.products.sort((a, b) => {
          return b.amount - a.amount
        })
      }
      sorted.forEach(p => {
        let nameDown = p.name.toLowerCase()
        let nameUp = p.name.toUpperCase()
        if (
          nameDown.indexOf(filterText) === -1 &&
          nameUp.indexOf(filterText) === -1
        ) {
          return
        }
        if (filterBought && p.bought === true) {
          return
        }
        products.push(
          <GroceryItem
            onBought={e => this.handleBoughtItem(e)}
            key={p.id}
            product={p}
          />
        )
      })
    }
    if (this.props.products) {
      return <ul className="grocery-list">{products}</ul>
    } else {
      return <p>No products...</p>
    }
  }
}

export default GroceryList
