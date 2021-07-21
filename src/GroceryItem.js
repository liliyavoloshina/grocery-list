function GroceryItem(props) {
  const handleBoughtItem = () => {
    props.onBought(props.product)
  }
  const isBought = props.product.bought
  return (
    <li onClick={() => handleBoughtItem()} className={`grosery-item ${isBought ? "grosery-item-bought" : ""}`}>
      <span className="grosery-item__name">{props.product.name}</span>
      <span className="grosery-item__amount">{props.product.amount}/pc.</span>
    </li>
  )
}

export default GroceryItem
