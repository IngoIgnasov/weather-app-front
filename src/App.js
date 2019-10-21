import React from 'react';
import { Component } from 'react';
import './App.css';
import WeatherApp from './component/WeatherApp';
import ShortForecastComponent from './component/ShortForecastComponent'
import MainForecastComponent from './component/MainForecastComponent'
import Footer from "./component/Footer";
import Banner from "./component/Banner";


class App extends Component {
  render() {
    return (
        <div className="App-header">
            <Banner/>
            <ShortForecastComponent/>
            <MainForecastComponent/>
            <WeatherApp/>
            <Footer/>
        </div>
    );
  }
}
export default App;
