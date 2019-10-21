import React from 'react';
import {Component} from 'react';
import '../App.css';
import day from '../assets/day.svg';
import ForecastDataService from "../service/ForecastDataService";
import Tooltip from "react-simple-tooltip";
import WeatherIconService from "../service/WeatherIconService";


const verySmallStyle = {
    fontSize: '12px',
    color: 'white'
};
const smallStyle = {
    fontSize: '20px',
    color: 'gold'
};
const medStyle = {
    fontSize: '50px',
    color: 'gold'
};

/**
 *This component is meant to be used to display the individual forecasts for specific locations. Not implement yet.
 */
class PlaceForecastComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            forecasts: []
        }
        this.refreshForecasts = this.refreshForecasts.bind(this)
    }

    componentDidMount() {
        this.refreshForecasts();
    }

    refreshForecasts() {
        ForecastDataService.getForecastByPlaceName("Tartu")
            .then(
                response => {
                    console.log(response);
                    //here we add courses received from the REST API call to the state of the component
                    this.setState({forecasts: response.data})
                }
            )
    }

    render() {
        return (
            <div className="Column">
                <h1 style={medStyle}>Tomorrows forecast</h1>
                {
                    //we use only the first forecast
                    this.state.forecasts.slice(0, 1).map(
                        forecast =>
                            <div className="Column">
                                <div className="Row">
                                    <div className="Inside-Column">
                                        <p style={medStyle}>{forecast.name}</p>
                                        <img src={WeatherIconService.getDayIcon(forecast.phenomenon)}/>
                                        <p style={smallStyle}>...{forecast.tempmax}°C</p>
                                    </div>
                                </div>
                            </div>
                    )}
            </div>
        );
    }
}

export default PlaceForecastComponent;