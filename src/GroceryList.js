import React from 'react'
import './css/style.css'
import GroceryItem from './GroceryItem'
class GroceryList extends React.Component {
  render() {
    const sortByAmount = this.props.sortByAmount
    const filterText = this.props.filterText
    let sorted = []
    const products = []
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
      if (nameDown.indexOf(filterText) === -1 && nameUp.indexOf(filterText) === -1) {
        return
      }
      products.push(<GroceryItem key={p.id} product={p} />)
    })
    return <ul className="grocery-list">{products}</ul>
  }
}

export default GroceryList
