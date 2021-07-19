function GroceryItem(props) {
  return (
    <li className="grosery-item">
      <span className="grosery-item__name">{props.product.name}</span>
      <span className="grosery-item__amount">{props.product.amount}/pc.</span>
    </li>
  )
}

export default GroceryItem
