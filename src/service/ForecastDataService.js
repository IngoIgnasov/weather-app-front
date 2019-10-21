import axios from 'axios'

const API_URL = 'http://localhost:8080';

class ForecastDataService{

    getAllForecasts(){
        return axios.get(`${API_URL}/forecasts`);
    }

    getTomorrowsForecast(){
        return axios.get(`${API_URL}/tmrw`);
    }

    getPlaceNames(){
        return axios.get(`${API_URL}/names`)
    }

    getForecastByPlaceName(name){
        return axios.get(`${API_URL}/places?name=${name}`)
    }
}

export default new ForecastDataService();