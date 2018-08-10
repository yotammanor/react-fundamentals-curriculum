import React, {Fragment} from 'react'
import api from '../utils/api'
import {parseUrl} from 'query-string'
import {Link} from 'react-router-dom'
import {WeatherDay} from "./WeatherDay";

const parseSearchState = (location) => parseUrl(location.search);

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      city: '',
      results: null,
      searchState: parseSearchState(props.location)
    };

    this.onUpdate = this.onUpdate.bind(this);

  }

  componentDidUpdate({location: prevLocation}) {
    if (this.props.location !== prevLocation) {
      const cityName = parseSearchState(this.props.location).query.city;
      this.setState(() => ({
        loading: true,
        results: null,
        error: false,
        searchState: parseSearchState(this.props.location),
        city: cityName
      }));
      this.onUpdate(cityName)
    }
  };

  onUpdate(cityName) {
    api.fiveDaysForecast(cityName)
      .then(results => {
        if (results === null) {
          return this.setState(() => {
            return {
              error: 'Looks like there was an error. Check the API is configured properly',
              loading: false,
            }
          });
        }

        this.setState(() => {


          return {
            loading: false,
            city: cityName,
            results: results,
          }
        })
      })
      .catch(error => {
        console.warn(error);
        this.setState(() => {
          return {loading: false, error: true}
        })
      })

  }

  componentDidMount() {
    const cityName = parseSearchState(this.props.location).query.city;
    this.onUpdate(cityName);
  }


  render() {
    return (
      <div>
        {this.state.loading ?
          <h1 className="forecast-header">Loading</h1> :
          this.state.error ?
            <p>{this.state.error}</p> : (
              <Fragment>
                <h1 className="forecast-header">{this.state.city}</h1>
                <Results results={this.state.results} cityName={this.state.city}/>
              </Fragment>
            )
        }

      </div>
    );
  }
}

const Results = ({results, cityName}) => {
  const filteredResults = results.list.filter((item, index) => index % 8 === 0);

  return <div className="forecast-container">
    {filteredResults.map(item => {
      return <Result key={item.dt} date={item.dt} weather={item.weather[0]} cityName={cityName}/>
    })
    }
  </div>
};

const Result = ({date, weather, cityName}) => {
  const formattedDate = new Date(date * 1000).toLocaleDateString();
  const detailLink = `/details/${cityName}/`;
  return (
    <Link to={detailLink}>
      <WeatherDay icon={weather.icon}
                  main={weather.main}
                  formattedDate={formattedDate}
                  src={require("../images/weather-icons/" + weather.icon + ".svg")}
      />
    </Link>
  )
};

export default Forecast