import React from 'react';
import Tooltip from "react-simple-tooltip"

import {Component} from 'react';
import '../App.css';

import ForecastDataService from "../service/ForecastDataService";
import WeatherIconService from "../service/WeatherIconService";

//font for short forecast
const smallStyle = {
    fontSize: '13px',
    color: 'white'
};
const medStyle = {
    fontSize: '20px',
    color: 'white'
};



class ShortForecastComponent extends Component {
    //we add list of forecasts to the state of the component
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
        ForecastDataService.getAllForecasts()
            .then(
                response => {
                    console.log(response);
                    //here we add courses received from the REST API call to the state of the component
                    this.setState({forecasts: response.data.forecasts})
                }
            )
    }

    render() {
        return (
            <div className="Short-Forecast-Row">
                {
                    //iterating over all of the forecasts besides first adding icons,tooltips and other info based on the weather data
                    this.state.forecasts.slice(1, this.state.forecasts.length).map(
                        forecast =>
                            <div className="Column">
                                <p style={smallStyle} key={forecast.date}>
                                    {forecast.date}
                                </p>
                                <div className="Row">
                                    <div className="Inside-Column">
                                    <p style={medStyle}>Day</p>
                                        <Tooltip style={smallStyle} content={forecast.days[0].text} fadeDuration={500}
                                                 placement={"left"}>
                                            <img src={WeatherIconService.getDayIcon(forecast.days[0].phenomenon)}
                                                 className="Small-logo" alt="logo"/>
                                        </Tooltip>
                                        <p style={smallStyle}>{forecast.days[0].tempmin}...{forecast.days[0].tempmax}</p>

                                    </div>
                                    <div className="Inside-Column">
                                    <p style={medStyle}>Night</p>
                                        <Tooltip style={smallStyle} content={forecast.nights[0].text} fadeDuration={500}
                                                 placement={"left"}>
                                            <img src={WeatherIconService.getNightIcon(forecast.nights[0].phenomenon)}
                                                 className="Small-logo" alt="logo"/>
                                        </Tooltip>
                                        <p style={smallStyle}>{forecast.nights[0].tempmin}...{forecast.nights[0].tempmax}</p>

                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default ShortForecastComponent;