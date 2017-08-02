import axios from 'axios';

const API_KEY = '54ab60394b58b2041b7d11706841f562';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCSq7jLtUM9qRDj7iFpp-NDuTa9eKGjYEI";

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const locRequest = axios.get(`${GOOGLE_API_URL}&address=${city}`)
    
    return (dispatch) => {
        return locRequest
        .then(r => 
            {
                const location = r.data.results[0].geometry.location;
                const lng = location.lng;
                const lat = location.lat;
                dispatch(fetchDarkSkyWeather(lat,lng,city));
            });
    }
}

function fetchDarkSkyWeather(lat,lng, city) {
    const url = `${ROOT_URL}${lat},${lng}`;
    const request = axios.get(url);
    return (dispatch) => {
        return request.then(r=> {
            dispatch({type: FETCH_WEATHER, payload: r, city:city});
        });
    }
}





