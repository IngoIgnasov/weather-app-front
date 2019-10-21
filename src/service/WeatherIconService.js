import rainy from '../assets/rainy.svg';
import day from '../assets/day.svg';
import cloudyday from '../assets/cloudy-day.svg';
import cloudy from '../assets/cloudy.svg';
import night from '../assets/night.svg';
import thunder from '../assets/thunder.svg';

/**
 *This class is responsible for turning the phenomenon field data we get from the API into corresponding Logos.
 */
class WeatherIconService{

    getIcon(phenomenon){
        if(phenomenon==="Cloudy"){
            return cloudy;
        }
        else if(phenomenon==="Light rain" || phenomenon==="Light shower" || phenomenon==="Moderate rain" || phenomenon==="Moderate shower" || phenomenon==="Heavy rain" || phenomenon === "Heavy shower"){
            return rainy;
        }
        else if(phenomenon==="Variable clouds" || phenomenon==="Cloudy with clear spells"){
            return cloudyday;
        }
        else if(phenomenon==="Thunder" || phenomenon==="Thunderstorm"){
            return thunder;
        }
    }

    getDayIcon(phenomenon){
        if(phenomenon==="Clear" || phenomenon === "Few clouds"){
            return day;
        }
        else return this.getIcon(phenomenon)
    }

    getNightIcon(phenomenon){
        if(phenomenon==="Clear" || phenomenon === "Few clouds"){
            return night;
        }
        else return this.getIcon(phenomenon)
    }


}
export default new WeatherIconService();