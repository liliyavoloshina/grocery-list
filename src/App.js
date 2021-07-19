import React from 'react'
import './css/styles.css'
import GroceryList from './GroceryList'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GroceryList />
      </div>
    )
  }
}

export default App
