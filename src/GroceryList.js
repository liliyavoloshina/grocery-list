import React from 'react'
import './css/styles.css'
class GroceryList extends React.Component {
  render() {
    return (
      <ul className="grocery-list">
        {this.props.products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    )
  }
}

export default GroceryList
