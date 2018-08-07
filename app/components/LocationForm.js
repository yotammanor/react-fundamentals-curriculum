import React, {Component} from "react";
import PropTypes from 'prop-types'

export class LocationForm extends Component {
  render() {
    return (
      <div className={"zipcode-container"} style={this.props.style}>
        <input className={"form-control"} type={"text"} placeholder={"St. George, Utah"}/>
        <button className={"button"}>Get Weather</button>
      </div>
    )
  }
}

LocationForm.propTypes = {
  style: PropTypes.object.isRequired,
};