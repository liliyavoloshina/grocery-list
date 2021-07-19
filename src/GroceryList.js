import React from 'react'
import './css/style.css'
import GroceryItem from './GroceryItem'
class GroceryList extends React.Component {
  render() {
    const products = []
    this.props.products.forEach(p => {
     products.push(<GroceryItem key={p.id} product={p} />) 
    })
    return (
      <ul className="grocery-list">
        {products}
      </ul>
    )
  }
}

export default GroceryList
