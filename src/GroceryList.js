import React from 'react'
import './css/style.css'
import GroceryItem from './GroceryItem'
import GroceryReset from './GroceryReset'
class GroceryList extends React.Component {
  handleBoughtItem(e) {
    this.props.onBoughtItem(e)
  }
  handleReset() {
    this.props.onReset()
  }
  render() {
    const sortByAmount = this.props.sortByAmount
    const filterText = this.props.filterText
    const filterBought = this.props.filterBought
    let sorted = []
    const products = []
    if (this.props.products.length > 0) {
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
    if (this.props.products.length > 0) {
      return (
        <div>
          <GroceryReset onReset={() => this.handleReset()} />
          {products.length > 0 ? (
            <ul className="grocery-list">{products}</ul>
          ) : (
            <div className="note">No products by such options...</div>
          )}
        </div>
      )
    } else {
      return <div className="note">Add some grocery!</div>
    }
  }
}

export default GroceryList
