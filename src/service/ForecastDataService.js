import axios from 'axios'

const API_URL = 'http://localhost:8080';

class ForecastDataService{

    getAllForecasts(){
        return axios.get(`${API_URL}/forecasts`);
    }

    getTomorrowsForecast(){
        return axios.get(`${API_URL}/tmrw`);
    }
}

export default new ForecastDataService();