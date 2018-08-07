import React from 'react'
import {LocationForm} from "./LocationForm";
import 'file-loader!../images/pattern.svg'

class Home extends React.Component {
  render() {
    return (
      <div className={"main-container"} style={{backgroundImage: "url('../images/pattern.svg')"}}>
        <h1 className={"header"}>Enter a City and State</h1>
        <LocationForm style={{flexDirection: "column"}}/>
      </div>
    );
  }
}

export default Home