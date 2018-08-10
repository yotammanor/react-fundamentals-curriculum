import React, {Component} from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      placeHolder: "St. George, Utah"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        search: value
      }
    })
  }


  render() {
    const cityName = this.state.search || this.state.placeHolder;
    return (

      <div className={"zipcode-container"} style={this.props.style}>
        <input className={"form-control"}
               type={"text"}
               placeholder={this.state.placeHolder}
               value={this.state.search}
               onChange={this.handleChange}
        />
        <Link className={"button"} to={{
          pathname: '/forecast',
          search: `?city=` + cityName
        }}>Get Weather</Link>
      </div>
    )
  }
}

LocationForm.propTypes = {
  style: PropTypes.object.isRequired,
};