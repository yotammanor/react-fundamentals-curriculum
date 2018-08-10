import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

require('./index.css');
import Header from './components/Header';
import Home from './components/Home'
import Forecast from './components/Forecast'
import Details from './components/Details'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/forecast' component={Forecast}/>
            <Route path='/details/:cityName([^/]+)/' component={Details}/>
            <Route path='/' component={() => <h1> Page Not Found!</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);