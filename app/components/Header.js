import React from 'react';
import {Link} from 'react-router-dom'
import {LocationForm} from "./LocationForm";

class Header extends React.Component {
  render() {
    return (
      <div className={"navbar"}>
        <Link to='/' className='header-link'><h1 style={{height: "40px"}}>Weather App</h1></Link>
        <LocationForm style={{flexDirection: "row"}}/>
      </div>
    )
  }

}

export default Header