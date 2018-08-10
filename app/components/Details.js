import React, {Fragment} from 'react'
import api from '../utils/api'
import WeatherDay from "./WeatherDay";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: null, loading: true}
  }

  componentDidMount() {
    api.currentWeather(this.props.match.params.cityName)
      .then(results => {
        this.setState(() => ({loading: false, results: results}))
      })

  }


  render() {
    const weather = this.state.results && this.state.results.weather[0];
    return (
      <Fragment>
        {this.state.loading ?
          <h1>Loading</h1> :
          <WeatherDay
            formattedDate={new Date(this.state.results.dt * 1000).toLocaleDateString()}
            icon={weather.icon}
            main={weather.main}
            src={require("../images/weather-icons/" + weather.icon + ".svg")}>
            <div className="description-container">
              <p>{this.props.match.params.cityName}</p>
              <p>{weather.description.toLowerCase()}</p>
              <p>tmp: {this.state.results.main.temp}</p>
              <p>humidity: {this.state.results.main.humidity}</p>
            </div>
          </WeatherDay>}
      </Fragment>
    )
  }

}

export default Details