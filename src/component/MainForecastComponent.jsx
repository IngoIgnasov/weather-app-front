import React from 'react';
import {Component} from 'react';
import '../App.css';
import ForecastDataService from "../service/ForecastDataService";
import Tooltip from "react-simple-tooltip";
import WeatherIconService from "../service/WeatherIconService";


const verySmallStyle ={
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

class MainForecastComponent extends Component {
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
            <div className="Column">
                <h1 style={medStyle}>Tomorrows forecast</h1>
                {
                    //we use only the first forecast
                    this.state.forecasts.slice(0,1).map(
                        forecast =>
                            <div className="Column">
                                <div className="Row">
                                    <div className="Inside-Column">
                                        <p style={medStyle}>Day</p>
                                        <Tooltip style={verySmallStyle} content={forecast.days[0].text} fadeDuration={500}
                                                 placement={"top"}>
                                            <img src={WeatherIconService.getDayIcon(forecast.days[0].phenomenon)}
                                                 className="App-logo" alt="logo"/>
                                        </Tooltip>
                                        <p style={smallStyle}>{forecast.days[0].tempmin}...{forecast.days[0].tempmax}°C</p>

                                    </div>
                                    <div className="Inside-Column">
                                        <p style={medStyle}>Night</p>
                                        <Tooltip style={verySmallStyle} content={forecast.nights[0].text} fadeDuration={500}
                                                 placement={"top"}>
                                            <img src={WeatherIconService.getNightIcon(forecast.nights[0].phenomenon)}
                                                 className="App-logo" alt="logo"/>
                                        </Tooltip>
                                        <p style={smallStyle}>{forecast.nights[0].tempmin}...{forecast.nights[0].tempmax}°C</p>

                                    </div>
                                </div>
                            </div>

                    )}
            </div>
        );
    }
}

export default MainForecastComponent;