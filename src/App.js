import React from 'react'
import './css/styles.css'
import data from './data.json'
import GroceryList from './GroceryList'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GroceryList products={data}/>
      </div>
    )
  }
}

export default App
