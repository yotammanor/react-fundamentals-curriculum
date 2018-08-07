import React from 'react';
import {LocationForm} from "./LocationForm";

class Header extends React.Component {
  render() {
    return (
      <div className={"navbar"}>
        <h1 style={{height: "40px"}}>Header.js</h1>
        <LocationForm style={{flexDirection: "row"}}/>
      </div>
    )
  }

}

export default Header