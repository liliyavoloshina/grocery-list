function GroceryItem(props) {
  return (
    <li className="grosery-item">
      <span className="grosery-item__name">{props.product.name}</span>
      <span className="grosery-item__priority">{props.product.number}/pc.</span>
    </li>
  )
}

export default GroceryItem
