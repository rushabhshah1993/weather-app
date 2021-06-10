import * as actions from './actionTypes';
import axios from "axios";

export const fetchCityWeather = city => {
    return dispatch => {
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=60dfad51347e098c9a6b000ced44c353`;
        axios.get(url)
            .then(result => {
                
            })
    }
}

export const setWeatherData = data => {
    return {
        type: actions.SET_WEATHER_DATA,
        data: data
    }
}
