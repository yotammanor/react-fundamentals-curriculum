import React, {Fragment} from 'react'
import api from '../utils/api'
import {parseUrl} from 'query-string'


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
      console.log('changed!');
      const cityName = parseSearchState(this.props.location).query.city;
      console.log(cityName);
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
        console.log(results);
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
                <Results results={this.state.results}/>
              </Fragment>
            )
        }

      </div>
    );
  }
}

const Results = ({results}) => {
  const filteredResults = results.list.filter((item, index) => index % 8 === 0);

  return <div className="forecast-container">
    {filteredResults.map(item => {
      return <Result key={item.dt} date={item.dt} weather={item.weather[0]}/>
    })
    }
  </div>
};

const Result = ({date, weather}) => {
  const formattedDate = new Date(date * 1000).toLocaleDateString();
  return (
    <div className="day-container">
      <img className="weather" src={require('../images/weather-icons/' + weather.icon + '.svg')} alt={weather.main}/>
      <h2 className="subheader">{formattedDate}</h2>
    </div>
  )
};

export default Forecast