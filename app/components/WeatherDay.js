import React, {Component} from "react";
import PropTypes from "prop-types";

export class WeatherDay extends Component {
  render() {
    return <div className="day-container">
      <img className="weather" src={'/' + this.props.src}
           alt={this.props.main}/>
      <h2 className="subheader">{this.props.formattedDate}</h2>
      {this.props.children}
    </div>;
  }
}

WeatherDay.propTypes = {
  src: PropTypes.string,
  main: PropTypes.string,
  formattedDate: PropTypes.string
};

export default WeatherDay