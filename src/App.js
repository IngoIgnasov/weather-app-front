import React from 'react';
import { Component } from 'react';
import './App.css';
import ShortForecastComponent from './component/ShortForecastComponent'
import MainForecastComponent from './component/MainForecastComponent'
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Autocomplete from "./component/Autocomplete";


class App extends Component {


  render() {
    return (
        <div className="App-header">
            <Banner/>
            <ShortForecastComponent/>
            <MainForecastComponent/>
            <Autocomplete/>
            <Footer/>
        </div>
    );
  }
}
export default App;
