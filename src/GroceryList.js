import React from 'react'
import './css/style.css'
import GroceryItem from './GroceryItem'
class GroceryList extends React.Component {
  render() {
    const sortByPriority = this.props.sortByPriority
    let sorted = []
    const products = []
    if (sortByPriority) {
      sorted = this.props.products.sort((a, b) => {
        return b.priority - a.priority
      })
    } else {
      sorted = this.props.products
    }
    console.log(sorted)
    sorted.forEach(p => {
      products.push(<GroceryItem key={p.id} product={p} />)
    })
    return <ul className="grocery-list">{products}</ul>
  }
}

export default GroceryList
