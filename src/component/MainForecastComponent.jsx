import React from 'react';
import { Component } from 'react';
import '../App.css';
import day from '../assets/day.svg';

const smallStyle = {
    fontSize: '13px',
    color: 'white'
};
const medStyle = {
    fontSize: '20px',
    color: 'white'
};




class MainForecastComponent extends Component{

    render(){
    return(
            <div className="Column">
                <p>Tomorrows forecast</p>
                <img src={day} className="App-logo" alt="day" />
            </div>
            );
        }
 }

 export default MainForecastComponent;