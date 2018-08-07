import React from 'react'
import ReactDOM from 'react-dom'

require('./index.css');
import Header from './components/Header';
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <Header/>
        <Home/>
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);