import React from 'react'
import ReactDOM from 'react-dom'
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <p>Hello World!</p>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);