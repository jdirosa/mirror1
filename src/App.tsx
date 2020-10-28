import React from 'react'
import { TransitionList } from './animations/TransitionList'
import './App.css'
import { centerMessages } from './messages/centerMessages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TransitionList
          showTime={5000}
          hideTime={3000}
          messages={centerMessages}
        />
      </header>
    </div>
  )
}

export default App
